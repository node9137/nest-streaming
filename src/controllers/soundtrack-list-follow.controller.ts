import { Controller } from "@nestjs/common";
import { SoundtrackListFollowService } from "@services/soundtrack-list-follow.service";

@Controller('soundtrackList/follow')
export class SoundtrackListFollowController{
    constructor(
        private readonly soundtrackListFollowService : SoundtrackListFollowService
    ){}

}