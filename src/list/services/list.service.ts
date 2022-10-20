import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { List } from "../entities/list.entity";

@Injectable()
export class ListService{
    constructor(@InjectRepository(List) private listRepository: Repository<List>) { }

    async findAll(): Promise<List[]>{
        return await this.listRepository.find();
    }
    async findById(id: number): Promise<List>{

        let list = await this.listRepository.findOne({
            where: {
                id
            }
        });

        if(!list)
            throw new HttpException('ID not found!', HttpStatus.NOT_FOUND);

            return list;
    }
    
    async create(list: List): Promise<List>{
         return await this.listRepository.save(list)
    }
    
    async update(list: List): Promise<List> {
        let searchID: List = await this.findById(list.id);

        if (!searchID || !list.id)
            throw new HttpException('ID not found!', HttpStatus.NOT_FOUND);

            return await this.listRepository.save(list);
    
        }
        async delete(id: number): Promise<DeleteResult> {
            let searchID = await this.findById(id);

            if(!searchID)
                throw new HttpException('ID not found!', HttpStatus.NOT_FOUND);
            return await this.listRepository.delete(id);
        }
    }
    
