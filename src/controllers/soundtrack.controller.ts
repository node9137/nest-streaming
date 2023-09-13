import { Email } from "@decorators/email.decorator";
import { TrackId } from "@decorators/trackId.decorator";
import SoundtrackEntity from "@models/soundtrack.entity";
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import {Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@providers/jwt-auth.guard";
import { SoundtrackService } from "@services/soundtrack.service";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { GetSoundtrackResponseDto } from "src/dtos/soundtrack/get-soundtrack-response.dto";
import { GetSoundtrackQuery } from "src/dtos/soundtrack/get-soundtracks-query.dto";
import { GetSoundtracksResponseDto } from "src/dtos/soundtrack/get-soundtracks-response.dto";
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
    @TypedRoute.Get()
    async getSoundtracks(@TypedQuery()getSoundtrackQuery : GetSoundtrackQuery):Promise<Try<GetSoundtracksResponseDto[]>>{
        const data = await this.soundtrackService.getMany(getSoundtrackQuery);
        return {
            status:true,
            data
        }
    }
    @TypedRoute.Get("/:trackId")
    async getgetSoundtrack(@TypedParam("trackId")trackId : number):Promise<Try<GetSoundtrackResponseDto>>{
        const data = await this.soundtrackService.getOne(trackId);
        return {
            status:true,
            data
        }
    }
    @TypedRoute.Patch("/:trackId")
    @UseGuards(JwtAuthGuard)
    async updateSoundtrack(@Email()email:string,@TypedParam("trackId")trackId : number,@TypedBody()updateSoundtrackRequestDto : UpdateSoundtrackRequestDto) : Promise<Try<null>>{
        await this.soundtrackService.update(email,trackId,updateSoundtrackRequestDto);
        return {
            status:true,
            message:"음원을 수정했습니다."
        }
    }
    @TypedRoute.Delete("/:trackId")
    @UseGuards(JwtAuthGuard)
    async deleteSoundtrack(@Email()email:string,@TypedParam("trackId")trackId : number):Promise<Try<null>>{
        await this.soundtrackService.delete(email,trackId);
        return {
            status:true,
            message:"음원을 삭제했습니다."
        }
    }
    
}