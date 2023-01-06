import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    gerUsers(): Promise<User[]> {
        const users = this.userRepository.find();
        return users;
    }

    getUser(id: number): Promise<User> {
        const user = this.userRepository.findOne({
            where: {
                id: id
            }
        });
        return user;
    }

    createUser(_user: CreateUserDto): Promise<User> {
        const user = this.userRepository.save(_user);
        return user;
    }

    async deleteUser(id: number) {
        return this.userRepository.delete({ id })
    }

}
