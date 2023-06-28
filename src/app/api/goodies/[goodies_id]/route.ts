import { prisma } from "@server/db";
import { NextRequest, NextResponse } from "next/server";
import { ClaimGoodiesDto, CreateBillPayloadDto, GoodiesIdDto, TClaimGoodiesBody, TCreateBillPayloadDto, TGoodiesIdDto } from "../dto";

async function createBill(phoneNumber: string, amount: string, reference: string) {
    const payload = CreateBillPayloadDto.safeParse({ phoneNumber, amount, reference }) as TZodResponse<TCreateBillPayloadDto>;

    if (!payload.success) {
        return { err: true, response: NextResponse.json({ ...payload.error.errors[0] }, { status: 400 }) };
    }

    const bill = await fetch(`${String(process.env.FLUTTERWAVE_V3_API)}/bills`, {
        method: "POST",
        headers: { Authorization: `Bearer ${String(process.env.FLUTTERWAVE_SECRET_API_KEY)}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            country: "NG",
            customer: phoneNumber,
            amount: amount,
            recurrence: "ONCE",
            reference,
            type: "AIRTIME"
        })
    });

    const response = await bill.json();
    if (!bill.ok) {
        return { err: true, response: NextResponse.json({ message: response?.message ?? "An error occurred" }, { status: bill.status ?? 400 }) };
    }

    return { err: null, response };
}

export async function PATCH(request: NextRequest, { params }: { params: { goodies_id: string } }) {
    try {
        const requestParams = GoodiesIdDto.safeParse(params) as TZodResponse<TGoodiesIdDto>;
        if (!requestParams.success) {
            return NextResponse.json({ ...requestParams.error.errors[0] }, { status: 400 });
        }
        const parsedParams = requestParams.data;

        const body = ClaimGoodiesDto.safeParse(await request.json()) as TZodResponse<TClaimGoodiesBody>;
        if (!body.success) {
            return NextResponse.json({ ...body.error.errors[0] }, { status: 400 });
        }
        const parsedBody = body.data;

        // TODO: Verify phone number

        const goodies = await prisma.goodies.findUnique({ where: { id: parsedParams.goodies_id } });
        if (!goodies) {
            return NextResponse.json({ message: "Goodies with the given ID does not exist" }, { status: 404 });
        }
        if (Date.now() > new Date(goodies.expiresAt).valueOf()) {
            return NextResponse.json({ message: "This goodies is no longer valid" }, { status: 410 });
        }
        if (goodies.status !== "ACTIVE") {
            return NextResponse.json({ message: "This goodies currently inactive" }, { status: 204 });
        }

        const goodiesAlreadyClaimedByUser = await prisma.allocationUser.findFirst({ where: { phone: parsedBody.phoneNumber } });
        if (goodiesAlreadyClaimedByUser) {
            const allocationPreviouslyClaimed = await prisma.allocation.findUnique({ where: { id: goodiesAlreadyClaimedByUser.allocationId } });
            if (allocationPreviouslyClaimed) {
                return NextResponse.json({ message: "You have already claimed a goodies" }, { status: 403 });
            }
        }

        const allocatedGoodies = await prisma.allocation.findFirst({ where: { goodieId: goodies.id, status: "UNCLAIMED" } });
        if (!allocatedGoodies) {
            return NextResponse.json({ message: "Sorry, all available goodies has been claimed" }, { status: 410 });
        }

        const claimedAllocatedGoodies = await prisma.$transaction(async (prismaClient) => {
            const allocationUser =   await prismaClient.allocationUser.create({
                data: { allocationId: allocatedGoodies.id, phone: parsedBody.phoneNumber, name: parsedBody.name }
            });
            const claimedAllocatedGoodies = await prismaClient.allocation.update({ where: { id: allocatedGoodies.id }, data: { status: "CLAIMED" } });

            const goodiesLeft = await prismaClient.allocation.findFirst({ where: { goodieId: goodies.id, status: "UNCLAIMED" } });
            if (!goodiesLeft) {
                await prismaClient.goodies.update({ where: { id: goodies.id }, data: { status: "EXPIRED" } });
            }

            const sendAirtime = await createBill(parsedBody.phoneNumber, allocatedGoodies.amount, claimedAllocatedGoodies.id);

            if (sendAirtime.err) {
                throw sendAirtime.response;
            }

            await prismaClient.allocationUser.update({ where: { id: allocationUser.id }, data: { fw_res: sendAirtime.response.data  } });

            return { err: null, response: claimedAllocatedGoodies };
        },{ timeout: 15000 });

        if (claimedAllocatedGoodies.err) {
            return claimedAllocatedGoodies.response;
        }

        return NextResponse.json(
            { message: "Goodies has been claimed, you should get your airtime shortly", data: claimedAllocatedGoodies.response },
            { status: 201 }
        );
    } catch (error: any) {
        if (!error.message) {
            return error;
        }

        console.error(error);
        return NextResponse.json(
            { message: error?.response?.data?.message ?? error.message ?? "An error occurred, please try again in few minutes" },
            { status: error?.response?.status ?? error?.status ?? 500 }
        );
    }
}
