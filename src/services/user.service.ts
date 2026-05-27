import { UserMongoRepository } from "../repositories/user.repository";
import { CreateUserDto } from "../dtos/user.dto";
import { HttpException } from "../exceptions/http-exception";
import bycrypt from "bcrypt"; // to hash password
import { IUser } from "../models/user.model";

const userRepository = new UserMongoRepository();
export class UserService {
    async createUser(userData: CreateUserDto) {
        // Check if username or email already exists
        const existingUserByUsername = await userRepository.findByUsername(
            userData.username
        );
        if (existingUserByUsername) {
            throw new HttpException(400, "Username already exists");
        }
        const existingUserByEmail = await userRepository.findByEmail(userData.email);
        if (existingUserByEmail) {
            throw new HttpException(400, "Email already exists");
        }
        // Hash the password before saving
        const hashedPassword = await bycrypt.hash(userData.password, 10);
        const userToCreate = {
            ...userData,
            password: hashedPassword,
        };
        const createdUser = await userRepository.create(userToCreate as any);
        return createdUser;
    }
}