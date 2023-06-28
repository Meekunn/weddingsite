import { z } from "zod";

export const AuthDto = z.object({
    name: z.string({ required_error: "Name is required" }).nonempty({ message: "Please enter a valid name" }),
    email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email" }),
    password: z.string({ required_error: "Password is required" }).nonempty({ message: "Please enter a valid password" })
});
export type TAuthDto = typeof AuthDto._input;

export const SignInAuthDto = AuthDto.pick({email: true, password: true})
export type TSignInAuthDto = typeof SignInAuthDto._type


