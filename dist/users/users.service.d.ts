import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private users;
    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN"): {
        id: number;
        name: string;
        role: string;
        email: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        role: string;
        email: string;
    };
    create(createUserDto: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: number, updatedUserDto: UpdateUserDto): {
        id: number;
        name: string;
        role: string;
        email: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        role: string;
        email: string;
    };
}
