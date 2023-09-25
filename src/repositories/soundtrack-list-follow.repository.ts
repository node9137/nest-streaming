import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";
import SoundtrackListFollowEntity from "@models/soundtrack-list-follow.entity";

@CustomRepository(SoundtrackListFollowEntity)
export class SoundtrackListFollowRepository extends Repository<SoundtrackListFollowEntity>{

}
