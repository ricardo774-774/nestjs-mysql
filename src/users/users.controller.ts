import { 
    Body, 
    Controller, 
    Post, 
    Get, 
    Param, 
    ParseIntPipe,
    Res,
    HttpStatus,
    NotFoundException,
    Delete,
    Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
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
          throw new NotFoundException('User not found, try another id');
        return res.status(HttpStatus.OK).json({
            user,
        });
    }

    @Post() 
    async create(
      @Res() res, 
      @Body() _user: CreateUserDto,
    ): Promise<User> {
        console.log('POST /users/');  
        console.log("Body:", JSON.stringify(_user));
        const user = await this.usersService.createUser(_user);
        return res.status(HttpStatus.OK).json({
            message: `User ${(await user).username} created successfully`,
            user,
        });
    }

    @Delete(':id') 
    async delete(
      @Res() res,
      @Param('id', ParseIntPipe) id: number,
    ) {
        console.log("DELETE /users/:id");
        console.log("Param:", id);
        const user = await this.usersService.getUser(id);
        if(!user) throw new NotFoundException('User not found, try another id');
        await this.usersService.deleteUser(id);
        return res.status(HttpStatus.OK).json({
            message: `User ${(await user).username} deleted successfully`,
        });
    }    

    @Put(':id') 
    async update(
      @Res() res, 
      @Param('id', ParseIntPipe) id: number,
      @Body() _user: UpdateUserDto,
    ): Promise<User> {
        console.log('PUT /users/:id');  
        console.log("Body:", JSON.stringify(_user));
        await this.usersService.updateUser(id, _user);
        const user = await this.usersService.getUser(id);
        if(!user) throw new NotFoundException('User not found, try another id');
        return res.status(HttpStatus.OK).json({
            message: `User ${(await user).username} updated successfully`,
            user,
        });
    }

}
