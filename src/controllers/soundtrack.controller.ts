import { Email } from "@decorators/email.decorator";
import { TrackId } from "@decorators/trackId.decorator";
import SoundtrackEntity from "@models/soundtrack.entity";
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
        console.log(email);
        await this.soundtrackService.create(email,createSoundtrackRequestDto);
        return {
            status:true,
            message : "회원가입에 성공했습니다."
        }
    }
    @TypedRoute.Get()
    async getSoundtracks(){
        const data = await this.soundtrackService.getMany();
    }
    @TypedRoute.Get("/:trackId")
    async getgetSoundtrack(@TypedParam("trackId")trackId : string):Promise<Try<SoundtrackEntity>>{
        const data = await this.soundtrackService.getOne(trackId);
        if(data)
        return {
            status:true,
            data
        }
        else
            throw Error
    }
    @TypedRoute.Patch("/:trackId")
    @UseGuards(JwtAuthGuard)
    async updateSoundtrack(@TypedParam("trackId")trackId : string,updateSoundtrackRequestDto : UpdateSoundtrackRequestDto) : Promise<Try<null>>{
        await this.soundtrackService.update(trackId,updateSoundtrackRequestDto);
        return {
            status:true,
            message:"음원을 수정했습니다."
        }
    }
    @TypedRoute.Delete("/:trackId")
    async deleteSoundtrack(@TypedParam("trackId")trackId : string):Promise<Try<null>>{
        await this.soundtrackService.delete(trackId);
        return {
            status:true,
            message:"음원을 삭제했습니다."
        }
    }
    
}