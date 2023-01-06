import { Body, Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get() 
    getAll(): Promise<User[]> {
        const users = this.usersService.gerUsers();
        return users;
    }

    @Get(':id') 
    getOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const user = this.usersService.getUser(id);
        return user;
    }

    @Post() 
    create(@Body() _user: CreateUserDto): Promise<User> {
        const user = this.usersService.createUser(_user);
        return user;
    }

}
