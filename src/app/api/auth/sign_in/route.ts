import { encodeJwt, verifyPassword } from "@app/api/utils/encryption.utils";
import { prismaService } from "@server/prisma.service";
import { NextRequest, NextResponse } from "next/server";
import { SignInAuthDto, TSignInAuthDto } from "../dto";

export async function POST(request: NextRequest) {
    try {
        const body = SignInAuthDto.safeParse(await request.json()) as TZodResponse<TSignInAuthDto>;

        if (!body.success) {
            return NextResponse.json({ ...body.error.errors[0] }, { status: 400 });
        }

        const parsedBody = body.data;

        const user = await prismaService.user.findFirst({ where: { email: parsedBody.email } });
        if (!user) {
            const response = NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
            response.cookies.delete("a_cred");
            return response;
        }

        const isMatch = verifyPassword(parsedBody.password, user.password!);
        if (!isMatch) {
            const response = NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
            response.cookies.delete("a_cred");
            return response;
        }

        const token = { _id: user.id };
        const encodedJwt = await encodeJwt(token);

        const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
        response.cookies.set({ name: "a_cred", value: encodedJwt, httpOnly: true, maxAge: 60 * 59 });
        return response;
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 }) as any;
    }
}
