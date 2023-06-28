import { Allocation, Goodies } from "@prisma/client";
import { prisma } from "@server/db";
import { NextRequest, NextResponse } from "next/server";
import { shareRedEnvelope } from "../utils/red-envelop.utils";
import { GoodiesDto, TGoodiesBody } from "./dto";

export async function GET(request: NextRequest) {
    try {
        const goodies = await prisma.goodies.findMany({});
        return NextResponse.json({ data: goodies }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const authCode = request.headers.get("a_cred");

        if (!authCode) {
            return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }

        if (authCode !== "123321") {
            return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }

        const body = GoodiesDto.safeParse(await request.json()) as TZodResponse<TGoodiesBody>;
        if (!body.success) {
            return NextResponse.json({ ...body.error.errors[0] }, { status: 400 });
        }

        const parsedBody = body.data;
        const expiresAt = new Date(parsedBody.expiresAt);

        if (Number(parsedBody?.minimum) < 100) {
            return NextResponse.json({ message: "Sorry but minimum airtime cannot be less than 100" }, { status: 400 });
        }
        if (expiresAt.valueOf() <= Date.now()) {
            return NextResponse.json({ message: "Sorry but expiry date must be a future date" }, { status: 400 });
        }

        const newGoodies = await prisma.$transaction(async (prismaClient): Promise<Goodies> => {
            const newGoodies = await prismaClient.goodies.create({
                data: {
                    amount: parsedBody.amount,
                    quantity: Number(parsedBody.quantity),
                    expiresAt,
                    strategy: parsedBody.strategy,
                    status: "ACTIVE"
                }
            });

            const allocation = shareRedEnvelope(
                newGoodies.id,
                parsedBody.strategy,
                Number(parsedBody.amount),
                new Date(parsedBody.expiresAt),
                Number(parsedBody.quantity)
            ) as Array<Allocation>;

            await prismaClient.allocation.createMany({ data: allocation });

            return newGoodies;
        });

        if (newGoodies) {
            return NextResponse.json({ message: "Goodies created successfully", data: newGoodies }, { status: 201 });
        }

        return NextResponse.json({ message: "Error creating Goodies", data: [] }, { status: 400 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
