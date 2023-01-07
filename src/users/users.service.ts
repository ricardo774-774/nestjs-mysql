import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    gerUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    getUser(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }

    createUser(user: CreateUserDto): Promise<User> {
        return this.userRepository.save(user);
    }

    deleteUser(id: number): Promise<any> {
        return this.userRepository.delete({ id })
    }

    updateUser(
      id: number,
      user: UpdateUserDto): Promise<any> {
        return this.userRepository.update({id}, user);
    }

}
