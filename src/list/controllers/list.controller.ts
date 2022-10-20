import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { List } from "../entities/list.entity";
import { ListService } from "../services/list.service";

@Controller("/list")
export class ListController{
    constructor(private readonly listService: ListService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<List[]>{
        return this.listService.findAll();
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() list: List): Promise<List>{
        return this.listService.create(list);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() list: List): Promise<List> {
        return this.listService.update(list);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.listService.delete(id);
    }

}