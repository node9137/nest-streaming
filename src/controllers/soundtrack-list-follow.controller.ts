import { Email } from "@decorators/email.decorator";
import { TypedBody, TypedRoute } from "@nestia/core";
import { Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@providers/jwt-auth.guard";
import { SoundtrackListFollowService } from "@services/soundtrack-list-follow.service";
import { CreateSoundtrackListFollowRequestDto } from "src/dtos/soundtrackList/create-soundtrack-list-follow-request.dto";
import { DeleteSoundtrackListFollowRequestDto } from "src/dtos/soundtrackList/delete-soundtrack-list-follow.request.dto";
import { Try } from "src/types/response.type";

@Controller('soundtrackList/follow')
export class SoundtrackListFollowController{
    constructor(
        private readonly soundtrackListFollowService : SoundtrackListFollowService
    ){}
    @TypedRoute.Post("create")
    @UseGuards(JwtAuthGuard)
    async createSoundtrackListFollow(@Email()email:string , @TypedBody()createSoundtrackListFollowRequestDto:CreateSoundtrackListFollowRequestDto) : Promise<Try<null>>{
        await this.soundtrackListFollowService.create(email,createSoundtrackListFollowRequestDto.soundtrackListId);
        return {
            status:true,
            message : "음원 리스트를 팔로우 했습니다."
        }
    }

    @TypedRoute.Post("delete")
    @UseGuards(JwtAuthGuard)
    async deleteSoundtrackListFollow(@Email()email:string,@TypedBody()deleteSoundtrackListFollowRequestDto:DeleteSoundtrackListFollowRequestDto) : Promise<Try<null>>{
        await this.soundtrackListFollowService.delete(email,deleteSoundtrackListFollowRequestDto.soundtrackListId);
        return{
            status:true,
            message:"음원 리스트 팔로우를 취소 했습니다."
        }
    }
}