import { UserController } from "@controllers/user.controller";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "@services/user.service";



@Module({
    imports:[],
    controllers:[UserController],
    providers:[UserService],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}