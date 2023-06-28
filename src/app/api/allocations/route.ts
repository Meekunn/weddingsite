import { prismaService } from "@server/prisma.service";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const goodies = await prismaService.allocation.findMany({where: {expiresAt:{gte: new Date()}}});
        return NextResponse.json({ data: goodies }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}