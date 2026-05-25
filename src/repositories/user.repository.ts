import User, { IUser } from "../models/user.model";
export interface IUserRepository {
    findByUsername(username: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    create(user: IUser): Promise<IUser>;
    findById(id: string): Promise<IUser | null>;
};
export class UserMongoRepository implements IUserRepository {
    async findByUsername(username: string): Promise<IUser | null> {
        const foundUser = await User.findOne({ username: username });
        return foundUser;
    }
    async findByEmail(email: string): Promise<IUser | null> {
        const foundUser = await User.findOne({ email: email });
        return foundUser;
    }
    async create(user: IUser): Promise<IUser> {
        const createdUser = await User.create(user);
        return createdUser;
    }
    async findById(id: string): Promise<IUser | null> {
        const foundUser = await User.findById(id);
        return foundUser;
    }
};