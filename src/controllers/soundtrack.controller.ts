import { Email } from "@decorators/email.decorator";
import { TrackId } from "@decorators/trackId.decorator";
import { TypedBody, TypedParam, TypedRoute } from "@nestia/core";
import {Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@providers/jwt-auth.guard";
import { SoundtrackService } from "@services/soundtrack.service";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { UpdateSoundtrackRequestDto } from "src/dtos/soundtrack/update-soundtrack-request.dto";
import { Try } from "src/types/response.type";

@Controller('soundtrack')
export class SoundtrackController{
    constructor(private readonly soundtrackService : SoundtrackService){
    }
    
    @TypedRoute.Post()
    @UseGuards(JwtAuthGuard)
    async createSoundtrack(@Email()email : string,@TypedBody()createSoundtrackRequestDto : CreateSoundtrackRequestDto) : Promise<Try<null>>{
        await this.soundtrackService.create(email,createSoundtrackRequestDto);
        return {
            status:true,
            message : "회원가입에 성공했습니다."
        }
    }
    // @TypedRoute.Get()
    // async getSoundtracks(){
    //     const data = await this.soundtrackService.getMany();
    // }
    // @TypedRoute.Get("/:trackId")
    // async getgetSoundtrack(@TypedParam("trackId")trackId : string){
    //     const data = await this.soundtrackService.getOne(trackId);
    // }
    // @TypedRoute.Patch("/:trackId")
    // @UseGuards(JwtAuthGuard)
    // async updateSoundtrack(@TypedParam("trackId")trackId : string,updateSoundtrackRequestDto : UpdateSoundtrackRequestDto){
    //     await this.soundtrackService.update(trackId,updateSoundtrackRequestDto);
    // }
    // @TypedRoute.Delete("/:trackId")
    // async deleteSoundtrack(@TypedParam("trackId")trackId : string){
    //     await this.soundtrackService.delete(trackId);
    // }
    
}