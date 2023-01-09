import { Task } from "src/tasks/entity/tasks.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({unique: true})
    email: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @OneToMany(()=> Task, task => task.author)
    tasks: Task[]
}