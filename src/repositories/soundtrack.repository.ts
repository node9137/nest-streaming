
import SoundtrackEntity from "@models/soundTrack.entity";
import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";

@CustomRepository(SoundtrackEntity)
export class SoundtrackRepository extends Repository<SoundtrackEntity>{

}
