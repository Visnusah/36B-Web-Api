import { UserSchema } from "../types/user.type";
import { z } from "zod";
// what client sends and need to validate before processing
export const CreateUserDto = UserSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    password: true,
});
export type CreateUserDto = z.infer<typeof CreateUserDto>;

