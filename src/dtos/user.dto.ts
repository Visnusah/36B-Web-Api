 import tr from "zod/v4/locales/tr.js";
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
//1. 
export const LoginUserDto = UserSchema.pick({
    email:true,
    password:true,
});
export type LoginUserDto = z.infer<typeof LoginUserDto>;
