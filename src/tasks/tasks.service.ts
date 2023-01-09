import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/tasks.entity';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task) private taskRepository: Repository<Task>
    ){}

    async createTask(
        _task: CreateTaskDto,
    ): Promise<Task> {
        const task = this.taskRepository.create(_task);
        return this.taskRepository.save(task);
    }

    getTasks() {
        return this.taskRepository.find({
            relations: ['author']
        })

    }

}
