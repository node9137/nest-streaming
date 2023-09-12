import { SoundtrackController } from "@controllers/soundtrack.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { SoundtrackService } from "@services/soundtrack.service";
import { SoundtrackRepository } from "src/repositories/soundtrack.repository";



@Module({
    imports:[CustomTypeOrmModule.forCustomRepository([SoundtrackRepository])],
    controllers:[SoundtrackController],
    providers:[SoundtrackService],
})
export class SoundtrackModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}