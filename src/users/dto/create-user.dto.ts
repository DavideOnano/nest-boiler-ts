import { IsEmail, IsEnum, isEnum, IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class CreateUserDto { //DTO is a Data Transformation Object, in this case used to validate object in my request
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(["INTERN" , "ENGINEER" , "ADMIN"], {
    message: "Valid role required"
  })
  role: "INTERN" | "ENGINEER" | "ADMIN";
}