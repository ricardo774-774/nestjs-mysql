import { 
    Body, 
    Controller, 
    Post, 
    Get, 
    Param, 
    ParseIntPipe, 
    Req, 
    Res,
    Query,
    HttpStatus,
    NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get() 
    async getAll(
      @Res() res,
    ): Promise<User[]> {
        console.log("GET /users");
        const users = await this.usersService.gerUsers();
        return res.status(HttpStatus.OK).json({
            users,
        });
    }

    @Get(':id') 
    async getOne(
      @Res() res,
      @Param('id', ParseIntPipe) id: number,
    ): Promise<User> {
        console.log("GET /users/:id");
        console.log("Param:", id);
        const user = await this.usersService.getUser(id);
        if(!user) 
          throw new NotFoundException('User does not exist, try another id');
        return res.status(HttpStatus.OK).json({
            user,
        });
    }

    @Post() 
    create(@Body() _user: CreateUserDto): Promise<User> {
        const user = this.usersService.createUser(_user);
        return user;
    }

}
