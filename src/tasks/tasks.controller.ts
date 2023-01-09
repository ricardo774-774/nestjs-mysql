import { Body, Controller, Post, Res, NotFoundException, HttpStatus, Get } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './entity/tasks.entity';
import { TasksService } from './tasks.service';
import { UsersService } from '../users/users.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService,
        private usersService: UsersService,
    ) {}

    @Get() 
    async getAll(
      @Res() res,
    ): Promise<Task[]> {
        console.log("GET /tasks/");
        const tasks = await this.tasksService.getTasks();
        return res.status(HttpStatus.OK).json({
            tasks,
        });
    }

    @Post()
    async create(
      @Res() res, 
      @Body() _task: CreateTaskDto,
    ): Promise<Task> {
        console.log('POST /tasks/');  
        console.log("Body:", JSON.stringify(_task));
        const user = await this.usersService.getUser(_task.authorId);
        if(!user) 
          throw new NotFoundException('User not found, try another id');
        const task = await this.tasksService.createTask(_task);
        return res.status(HttpStatus.OK).json({
            message: 'Task created successfully',
            task,
        });
    }


}
