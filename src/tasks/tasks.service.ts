import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { Task } from './entity/tasks.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task) private taskRepository:
        Repository<Task>,
        private usersService: UsersService
    ){}

    createTask() {

    }

    getTask() {
        
    }

}
