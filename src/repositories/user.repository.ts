import User, { IUser } from "../models/user.model";
export interface IUserRepository {
    findByUsername(username: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    // 5 common mandatory methods for any repository
    create(user: IUser): Promise<IUser>;
    findById(id: string): Promise<IUser | null>;
    findAll(): Promise<IUser[]>;
    update(id: string, user: Partial<IUser>)
        : Promise<IUser | null>;
    delete(id: string): Promise<boolean>;
}
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
    /**
     * Retrieves all users from the database.
     * @returns A promise that resolves to an array of IUser objects.
     */
    async findAll(): Promise<IUser[]> {
        const users = await User.find();
        return users;
    }

    /**
     * Updates a user record by its unique identifier.
     * @param id - The ID of the user to update.
     * @param user - A partial object containing the updated user fields.
     * @returns A promise that resolves to the updated IUser object or null if not found.
     */
    async update(id: string, user: Partial<IUser>)
        : Promise<IUser | null> {
        // { new: true } returns the updated document instead of the original
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        return updatedUser;
    }

    /**
     * Deletes a user record by its unique identifier.
     * @param id - The ID of the user to delete.
     * @returns A promise that resolves to true if the user was deleted, or false if not found.
     */
    async delete(id: string): Promise<boolean> {
        const deletedUser = await User.findByIdAndDelete(id);
        // Converts the deleted document (or null) to a boolean value
        return !!deletedUser; 
    }
}