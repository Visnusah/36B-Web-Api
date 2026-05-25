import { UserMongoRepository } from "../repositories/user.repository";
import { CreateUserDto } from "../dtos/user.sto";
import { HttpException } from "../exceptions/http-exception";
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
        // Create new user
        // const createdUser = await userRepository.create();
        // return createdUser;
    }
}