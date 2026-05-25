import z from "zod";
import { UserSchema } from "../types/user.type";
// what client sends and need to validate before processing
export const createUserDto = UserSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    password: true,
});
export type CreateUserDto = z.infer<typeof createUserDto> ;
