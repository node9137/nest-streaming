import PlayListEntity from "@models/playlist.entity";
import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";

@CustomRepository(PlayListEntity)
export class PlayListRepository extends Repository<PlayListEntity>{

}
