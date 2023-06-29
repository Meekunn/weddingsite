import { NextResponse } from "next/server";
import { z } from "zod";

export const ValidateData = async <T>(zodObject: z.AnyZodObject, input: T) => {
    const body = zodObject.safeParse(await input) as TZodResponse<T>;
    if (!body.success) {
        return { err: true, result: NextResponse.json({ ...body.error.errors[0] }, { status: 400 }) };
    }

    return { err: false, result: body.data };
};
