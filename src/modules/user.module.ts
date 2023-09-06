import { UserController } from "@controllers/user.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserService } from "@services/user.service";
import { JwtStragety } from "src/providers/jwt-stragety.provider";
import { JwtProvider } from "src/providers/jwt.provider";
import { UserRepository } from "src/repositories/user.repository";



@Module({
    imports:[CustomTypeOrmModule.forCustomRepository([UserRepository]),JwtModule.register({
        secret:"1234",
        signOptions:{expiresIn:"15m"},
    })],
    controllers:[UserController],
    providers:[UserService,JwtStragety,JwtProvider],
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}