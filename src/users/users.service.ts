import { Injectable, NotFoundException } from '@nestjs/common';
import { isErrored } from 'stream';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  private users = [
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
  ]
  findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role)
      if(rolesArray.length === 0) throw new NotFoundException("User Role Not Found")
      return rolesArray
    }
    return this.users
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id)
    if(!user) throw new NotFoundException("User Not Found")
    return user
  }
  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto
    }
    this.users.push(newUser)
    return newUser
  }

  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto }
      }
      return user
    })

    return this.findOne(id)
  }

  delete(id: number) {
    const removedUser = this.findOne(id)

    this.users = this.users.filter(user => user.id !== id)
    return removedUser
  }
}


