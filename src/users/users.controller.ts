import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') { //the query parameter in this case (bcs of the ?) is optional
    return this.usersService.findAll(role)
  }
  @Get(":id") //GET /users/:id
  findOne(@Param('id', ParseIntPipe) id: number) { // ParseIntPipe is a pipe(see doc) that validate the value sent in the request (in this case, is validating that value is a numeric string, so if we sent /aa as id will return 400)
    return this.usersService.findOne(+id)
  }

  @Post() //POST /users
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) { // from dto file, so we have only one everywhere
    return this.usersService.create(createUserDto)
  }

  @Patch(':id') //PATCH / users/:id
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto) { // here object element are optional, because it could be updated only one
    return this.usersService.update(+id, updateUserDto) // return updated user by id
  }

  @Delete(":id") //DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(+id)
  }
}
