import { UserController } from "@controllers/user.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserService } from "@services/user.service";
import { UserRepository } from "src/repositories/user.repository";



@Module({
    imports:[CustomTypeOrmModule.forCustomRepository([UserRepository])],
    controllers:[UserController],
    providers:[UserService],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}