"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                "id": 1,
                "name": "John Doe",
                "role": "INTERN",
                "email": "dav@gmail.com"
            },
            {
                "id": 2,
                "name": "John Doe2",
                "role": "ENGINEER",
                "email": "dav2@gmail.com"
            },
            {
                "id": 3,
                "name": "John Doe3",
                "role": "INTERN",
                "email": "dav3@gmail.com"
            },
            {
                "id": 4,
                "name": "John Doe4",
                "role": "ADMIN",
                "email": "dav4@gmail.com"
            },
            {
                "id": 5,
                "name": "John Doe5",
                "role": "INTERN",
                "email": "dav5@gmail.com"
            }
        ];
    }
    findAll(role) {
        if (role) {
            const rolesArray = this.users.filter((user) => user.role === role);
            if (rolesArray.length === 0)
                throw new common_1.NotFoundException("User Role Not Found");
            return rolesArray;
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            throw new common_1.NotFoundException("User Not Found");
        return user;
    }
    create(createUserDto) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updatedUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map