import { IsNumber } from 'class-validator';
import { 
    IsNotEmpty,
    IsString,
    MaxLength,
  } from "class-validator";
  
  export class CreateTaskDto {
    @MaxLength(20, {
      message: "Invalid title format, less than 20 letters",
    })
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsNotEmpty()
    content: string;
    
    @IsNumber()
    authorId: number;
  }