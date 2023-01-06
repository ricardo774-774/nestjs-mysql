import { 
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from "class-validator";

export class CreateUserDto {
    @MaxLength(20, {
        message: "Invalid name format, less than 20 characters",
        })
    @MinLength(3, {
        message: "Invalid name format, more than 3 characters",
      })
    @Matches(/^[A-z,0-9_]+(?:\s[A-z,0-9_]+)*$/, {
        message: "Invalid name format, only letters and spaces",
      })
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @MaxLength(20, {
        message: "Invalid name format, less than 20 characters",
      })
    @MinLength(3, {
        message: "Invalid name format, more than 3 characters",
      })
    @IsString()
    @IsNotEmpty()
    password: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
}