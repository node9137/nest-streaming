import { PlaylistController } from "@controllers/playlist.controller";
import { CustomTypeOrmModule } from "@libs/typeorm/custom-typeorm.module";
import PlaylistEntity from "@models/playlist.entity";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PlayListRepository } from "@repositories/playlist.repository";
import { PlaylistService } from "@services/playlist.service";
import { DataSource } from "typeorm";

export const playlistProviders = [
    {
      provide: 'PLAYLIST_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(PlaylistEntity),
      inject: [DataSource],
    },
  ];
  

@Module({
    imports:[
        CustomTypeOrmModule.forCustomRepository([PlayListRepository])
    ],
    controllers:[PlaylistController],
    providers:[PlaylistService,
        ...playlistProviders
    ],
})
export class PlaylistModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        
    }
}