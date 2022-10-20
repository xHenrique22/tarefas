import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_list'})
export class List {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    task: string;

    @IsNotEmpty()
    @Column({nullable: false})
    done: boolean;

    @UpdateDateColumn()
    date: Date;
    
}