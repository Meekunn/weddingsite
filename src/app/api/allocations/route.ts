import { prisma } from "@server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const allocation = await prisma.allocation.findMany({ where: { status: "CLAIMED" }, include: { AllocationUser: true } });
        return NextResponse.json({ data: allocation }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
