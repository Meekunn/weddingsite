import { prismaService } from "@server/prisma.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const users = await prismaService.user.findMany();
        console.log(users);

        // console.log(request.nextUrl.searchParams.get('oka'))

        return NextResponse.json({ message: "Hello Users" }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
}

// export async function POST(request: NextRequest) {
//   try {

//     console.log(request)

//     const users = await prismaService.user.findMany()
//    console.log(users)

//     // console.log(request.nextUrl.searchParams.get('oka'))

//     return NextResponse.json({ message: "Hello Users" }, { status: 200 })

//   } catch (error) {
//     console.log(error);
//   }
// }
