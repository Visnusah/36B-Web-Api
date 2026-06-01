import { UserService } from "../../services/user.service";
import { HttpException } from "../../exceptions/http-exception";
import { z } from "zod";
import { CreateUserDto, LoginUserDto } from "../../dtos/user.dto";
import { ApiResponseHelper } from "../../utils/api-response";
import { Request, Response } from "express";

const userService = new UserService();

export class AdminUserController {
    async createUser(req: Request, res: Response) {
        try {
            if (!req.body || Object.keys(req.body).length === 0) {
                throw new HttpException(
                    400,
                    "Request body is empty or invalid. Please ensure you are sending a JSON payload and your 'Content-Type' header is set to 'application/json' in Postman."
                );
            }
            const parseResult = CreateUserDto.safeParse(req.body);
            if (!parseResult.success) {
                throw new HttpException(
                    400,
                    z.prettifyError(parseResult.error)
                );
            }
            const createdUser = await userService.createUser(parseResult.data);
            return ApiResponseHelper.success(res, createdUser, 201, "User created");
        } catch (e: Error | unknown | any) {
            return ApiResponseHelper.error(
                res,
                e?.message || "Failed to create user",
                e.status || 500
            );
        }
    }
}