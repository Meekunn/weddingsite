import { z } from "zod";

export const GoodiesDto = z.object({
    amount: z.string({ required_error: "Amount is required" }).nonempty({ message: "Please enter a amount" }),
    quantity: z.string({ required_error: "Quantity is required" }).nonempty({ message: "Please enter a quantity" }),
    minimum: z.string({ required_error: "Quantity is required" }).optional().nullable(),
    strategy: z.enum(["EQUAL", "RANDOM"], {required_error: "Please enter a valid strategy"}),
    status: z.enum(["ACTIVE", "PENDING"], { required_error: "Please enter a valid status" }),
    expiresAt: z.string({ required_error: "Expiry date is required" }).nonempty({ message: "Please enter a valid expiry date" })
});
export type TGoodiesBody = typeof GoodiesDto._type


export const ClaimGoodiesDto = z.object({
    name: z.string({required_error: "Name is required"}).nonempty({message: "Name cannot be empty"}),
    phoneNumber: z.string({required_error: "Phone number is required"}).min(14, {message: "Phone must be a valid Nigerian number"}).nonempty({message: "Phone number cannot be empty"}),
    network:z.enum(['MTN', 'GLO', 'AIRTEL', '9MOBILE'], { required_error: "Please select a valid network provider" })
})
export type TClaimGoodiesBody = typeof ClaimGoodiesDto._type


export const GoodiesIdDto = z.object({
    goodies_id: z.string({ required_error: "Goodies UUID is required" }).uuid({message: "A valid goodies UUID is required"}).nonempty({ message: "Please enter a goodies UUID" }),
})
export type TGoodiesIdDto = typeof GoodiesIdDto._type


export const CreateBillPayloadDto = z.object({
    phoneNumber: z.string({required_error: "Phone must be a valid Nigerian number"}).min(14, {message: "Phone must be a valid Nigerian number"}).nonempty({message: "Phone number cannot be empty"}),
    amount: z.string({required_error: "Amount is missing"}).nonempty({message: "Cannot continue, amount was not provided"}),
    reference: z.string({required_error: "Reference is required"}).nonempty({message: "Cannot proceed without a reference"})
})
export type TCreateBillPayloadDto = typeof CreateBillPayloadDto._type