import { SoundtrackController } from "@controllers/soundtrack.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import SoundtrackEntity from "@models/soundtrack.entity";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SoundtrackRepository } from "@repositories/soundtrack.repository";
import { SoundtrackService } from "@services/soundtrack.service";
import { DataSource } from "typeorm";

export const soundtrackProviders = [
    {
      provide: 'SOUNDTRACK_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(SoundtrackEntity),
      inject: [DataSource],
    },
  ];
  

@Module({
    imports:[
//        TypeOrmModule
        CustomTypeOrmModule.forCustomRepository([SoundtrackRepository])
        //TypeOrmModule.forFeature([SoundtrackEntity])
    ],
    controllers:[SoundtrackController],
    providers:[SoundtrackService,
        ...soundtrackProviders
    ],
})
export class SoundtrackModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}