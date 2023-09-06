import { UserController } from "@controllers/user.controller";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserService } from "@services/user.service";



@Module({
    controllers:[UserController],
    providers:[UserService],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}