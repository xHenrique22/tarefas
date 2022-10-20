import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ListController } from "./controllers/list.controller";
import { List } from "./entities/list.entity";
import { ListService } from "./services/list.service";

@Module({
    imports:[TypeOrmModule.forFeature([List])],
    providers: [ListService],
    controllers: [ListController],
    exports: [TypeOrmModule]
})
export class ListModule {}