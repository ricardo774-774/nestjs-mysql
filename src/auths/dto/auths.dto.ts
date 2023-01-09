import { 
    IsEmail, 
    IsNotEmpty, 
    IsNumber, 
    IsOptional, 
    IsString, 
    Matches, 
    MaxLength, 
    MinLength 
} from 'class-validator';

export class SignUpDTO {
    @MaxLength(20, {
        message: "Invalid name format, less than 20 characters",
    })
    @MinLength(3, {
        message: "Invalid name format, more than 3 characters",
    })
    @Matches(/^[A-z,0-9_]+(?:\s[A-z,0-9_]+)*$/, {
        message: "Invalid name format, only letters and numbers",
    })
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @MaxLength(20, {
        message: "Invalid password format, less than 20 characters",
    })
    @MinLength(6, {
        message: "Invalid password format, more than 6 characters",
    })
    @Matches(/^[A-z,0-9_]+(?:\s[A-z,0-9_]+)*$/, {
        message: "Invalid password format, only letters and numbers",
    })
    @IsString()
    @IsNotEmpty()
    password: string;
    
    @IsEmail()
    email: string;
}

export class ConfirmUserDTO {
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @IsNumber()
    verificationCode: number;
}

export class ResendTokenDTO {
    @IsString()
    @IsNotEmpty()
    username: string;
}

export class SignInDTO {
    @IsString()
    @IsNotEmpty()
    username: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class ChangePassword {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @MaxLength(20, {
        message: "Invalid password format, less than 20 characters",
    })
    @MinLength(3, {
        message: "Invalid password format, more than 3 characters",
    })
    @Matches(/^[A-z,0-9_]+(?:\s[A-z,0-9_]+)*$/, {
        message: "Invalid password format, only letters and numbers",
    })
    @IsString()
    @IsNotEmpty()
    newPassword: string;
}

export class RestorePassword {
    @IsString()
    @IsNotEmpty()
    username: string;
}