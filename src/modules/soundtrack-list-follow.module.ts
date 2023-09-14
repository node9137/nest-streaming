import { SoundtrackListFollowController } from "@controllers/soundtrack-list-follow.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SoundtrackListFollowRepository } from "@repositories/soundtrack-list-follow.repository";
import { UserRepository } from "@repositories/user.repository";
import { SoundtrackListFollowService } from "@services/soundtrack-list-follow.service";



@Module({
    imports:[
        CustomTypeOrmModule.forCustomRepository([SoundtrackListFollowRepository,UserRepository]),
],
    controllers:[SoundtrackListFollowController],
    providers:[SoundtrackListFollowService],
})
export class SoundtrackFollowListModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}