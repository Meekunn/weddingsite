import { prismaService } from "@server/prisma.service";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ClaimGoodiesDto, CreateBillPayloadDto, GoodiesIdDto, TClaimGoodiesBody, TCreateBillPayloadDto, TGoodiesIdDto } from "../dto";

const billers = [
    {
        id: 1,
        biller_code: "BIL099",
        name: "AIRTIME",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:40.22Z",
        country: "NG",
        is_airtime: true,
        biller_name: "AIRTIME",
        item_code: "AT099",
        short_name: "MTN VTU",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 2,
        biller_code: "BIL100",
        name: "AIRTEL NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:41.257Z",
        country: "NG",
        is_airtime: true,
        biller_name: "AIRTEL VTU",
        item_code: "AT100",
        short_name: "AIRTEL VTU",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 3,
        biller_code: "BIL102",
        name: "GLO NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:42.173Z",
        country: "NG",
        is_airtime: true,
        biller_name: "GLO VTU",
        item_code: "AT102",
        short_name: "GLO VTU",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 4,
        biller_code: "BIL103",
        name: "9MOBILE NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:43.093Z",
        country: "NG",
        is_airtime: true,
        biller_name: "9MOBILE VTU",
        item_code: "AT103",
        short_name: "9MOBILE VTU",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 58,
        biller_code: "BIL099",
        name: "MTN NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:40.22Z",
        country: "NG",
        is_airtime: true,
        biller_name: "MTN VTU",
        item_code: "AT099",
        short_name: "MTN NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 59,
        biller_code: "BIL100",
        name: "AIRTEL NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:41.257Z",
        country: "NG",
        is_airtime: true,
        biller_name: "AIRTEL VTU",
        item_code: "AT100",
        short_name: "AIRTEL NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 60,
        biller_code: "BIL102",
        name: "GLO NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:42.173Z",
        country: "NG",
        is_airtime: true,
        biller_name: "GLO VTU",
        item_code: "AT102",
        short_name: "GLO NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 61,
        biller_code: "BIL103",
        name: "9MOBILE NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:43.093Z",
        country: "NG",
        is_airtime: true,
        biller_name: "9MOBILE VTU",
        item_code: "AT103",
        short_name: "9MOBILE NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 115,
        biller_code: "BIL102",
        name: "GLO NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:42.173Z",
        country: "NG",
        is_airtime: true,
        biller_name: "GLO VTU",
        item_code: "AT133",
        short_name: "GLO NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    },
    {
        id: 116,
        biller_code: "BIL103",
        name: "9MOBILE NIGERIA",
        default_commission: 0.03,
        date_added: "2020-09-17T15:56:43.093Z",
        country: "NG",
        is_airtime: true,
        biller_name: "9MOBILE VTU",
        item_code: "AT134",
        short_name: "9MOBILE NIGERIA",
        fee: 0,
        commission_on_fee: false,
        label_name: "Mobile Number",
        amount: 0
    }
];

const NETWORKS = {
    MTN: { item_code: "AT099", bill: "BIL099" },
    GLO: { item_code: "AT100", bill: "BIL100" },
    AIRTEL: { item_code: "AT102", bill: "BIL102" },
    "9MOBILE": { item_code: "AT103", bill: "BIL103" }
} as const;

const axiosInstance = axios.create({
    baseURL: String(process.env.FLUTTERWAVE_V3_API),
    headers: { Authorization: `Bearer ${String(process.env.FLUTTERWAVE_SECRET_API_KEY)}`, "Content-Type": "application/json" }
});

async function createBill(phoneNumber: string, amount: string, reference: string) {
    const payload = CreateBillPayloadDto.safeParse({ phoneNumber, amount, reference }) as TZodResponse<TCreateBillPayloadDto>;

    if (!payload.success) {
        return { err: true, response: NextResponse.json({ ...payload.error.errors[0] }, { status: 400 }) };
    }

    const bill = await axiosInstance.post("./bills", {
        country: "NG",
        customer: phoneNumber,
        amount: amount,
        recurrence: "ONCE",
        reference,
        type: "AIRTIME"
    });

    return { err: null, response: bill };
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

        const goodies = await prismaService.goodies.findUnique({ where: { id: parsedParams.goodies_id } });
        if (!goodies) {
            return NextResponse.json({ message: "Goodies with the given ID does not exist" }, { status: 404 });
        }
        if (Date.now() > new Date(goodies.expiresAt).valueOf()) {
            return NextResponse.json({ message: "This goodies is no longer valid" }, { status: 410 });
        }
        if (goodies.status !== "ACTIVE") {
            return NextResponse.json({ message: "This goodies currently inactive" }, { status: 204 });
        }

        const goodiesAlreadyClaimedByUser = await prismaService.allocationUser.findFirst({ where: { phone: parsedBody.phoneNumber } });
        if (goodiesAlreadyClaimedByUser) {
            const allocationPreviouslyClaimed = await prismaService.allocation.findUnique({ where: { id: goodiesAlreadyClaimedByUser.allocationId } });
            if (allocationPreviouslyClaimed) {
                return NextResponse.json({ message: "You have already claimed a goodies" }, { status: 403 });
            }
        }

        const allocatedGoodies = await prismaService.allocation.findFirst({ where: { goodieId: goodies.id, status: "UNCLAIMED" } });
        if (!allocatedGoodies) {
            return NextResponse.json({ message: "Sorry, all available goodies has been claimed" }, { status: 410 });
        }

        const claimedAllocatedGoodies = await prismaService.$transaction(async (prismaClient) => {
            await prismaClient.allocationUser.create({
                data: { allocationId: allocatedGoodies.id, phone: parsedBody.phoneNumber, network: parsedBody.network, name: parsedBody.name }
            });
            const claimedAllocatedGoodies = await prismaClient.allocation.update({ where: { id: allocatedGoodies.id }, data: { status: "CLAIMED" } });

            const goodiesLeft = await prismaClient.allocation.findFirst({ where: { goodieId: goodies.id, status: "UNCLAIMED" } });
            if (!goodiesLeft) {
                await prismaClient.goodies.update({ where: { id: goodies.id }, data: { status: "EXPIRED" } });
            }

            const sendAirtime = await createBill(parsedBody.phoneNumber, allocatedGoodies.amount, String(Date.now()));

            if (sendAirtime.err) {
                return sendAirtime;
            }

            return { err: null, response: claimedAllocatedGoodies };
        });

        if (claimedAllocatedGoodies.err) {
            return claimedAllocatedGoodies.response;
        }

        return NextResponse.json(
            { message: "Goodies has been claimed, you should get your airtime shortly", data: claimedAllocatedGoodies.response },
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error.message);
        console.error(error);
        return NextResponse.json(
            { message: error?.response?.data?.message ?? error.message ?? "An error occurred, please try again in few minutes" },
            { status: error?.response?.status ?? error?.status ?? 500 }
        );
    }
}
