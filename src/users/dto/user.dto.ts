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
    message: "Invalid username format, less than 20 letters",
  })
  @MinLength(3, {
    message: "Invalid username format, more than 3 letters",
  })
  @Matches(/^[A-z,0-9_]+(?:\s[A-z,0-9_]+)*$/, {
      message: "Invalid username format, only letters and spaces",
    })
  @IsString()
  @IsNotEmpty()
  username: string;

  @MaxLength(20)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
}