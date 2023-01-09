import { 
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsOptional
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

  @MaxLength(20, {
    message: "Invalid password format, less than 20 letters",
  })
  @MinLength(6, {
    message: "Invalid password format, more than 6 letters",
  })
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateUserDto {
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
  @IsOptional()
  username: string;
}