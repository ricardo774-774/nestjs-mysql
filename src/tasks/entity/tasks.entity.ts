import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entity/user.entity";

@Entity({ name: 'task'})
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    authorId: number

    @ManyToOne(() => User, user => user.tasks)
    author: User
}