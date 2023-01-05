import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'users'} )
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

    @Column()
    authFrom: string;
}