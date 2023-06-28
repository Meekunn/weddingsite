import { encodeJwt, signPassword } from "@app/api/utils/encryption.utils";
import { prismaService } from "@server/prisma.service";
import { NextRequest, NextResponse } from "next/server";
import { AuthDto, TAuthDto } from "../dto";

export async function POST(request: NextRequest) {
    try {
        const adminExist = await prismaService.user.findFirst({});
        if (adminExist) {
            return NextResponse.json({ message: "Access Denied" }, { status: 403 });
        }

        const body = AuthDto.safeParse(await request.json()) as TZodResponse<TAuthDto>;

        if (!body.success) {
            return NextResponse.json({ ...body.error.errors[0] }, { status: 400 });
        }

        const parsedBody = body.data;

        const existingUser = await prismaService.user.findFirst({ where: { email: parsedBody.email } });
        if (existingUser) {
            const response = NextResponse.json({ message: "A User with the entered email already exist" }, { status: 409 });
            response.cookies.delete("a_cred");
            return response;
        }

        const encryptedPassword = signPassword(parsedBody.password);

        const newUser = await prismaService.user.create({ data: { email: parsedBody.email, name: parsedBody.name, password: encryptedPassword } });

        const token = { _id: newUser.id };
        const encodedJwt = await encodeJwt(token);

        const response = NextResponse.json({ message: "Signup successful" }, { status: 201 });
        response.cookies.set({ name: "a_cred", value: encodedJwt, httpOnly: true, maxAge: 60 * 59 });
        return response;
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 }) as any;
    }
}
