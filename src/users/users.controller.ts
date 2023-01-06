import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Post() 
    create(@Body() _user: CreateUserDto): Promise<User> {
        const user = this.usersService.createUser(_user);
        return user;
    }

}
