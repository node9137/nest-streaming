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
    /**
     * 
     * 게시글 생성 기능
     * 
     * Body 를 통해 받은 createSoundtrackRequestDto (albumName,category,name,singer,maxFormat)을 통해 Soundtrack 을 만든다.
     * 
     * @tag soundtrack
     * @security bearer
     * @param email 
     * @param createSoundtrackRequestDto 
     * @returns 
     */
    @TypedRoute.Post()
    @UseGuards(JwtAuthGuard)
    async createSoundtrack(@Email()email : string,@TypedBody()createSoundtrackRequestDto : CreateSoundtrackRequestDto) : Promise<Try<null>>{
        await this.soundtrackService.create(email,createSoundtrackRequestDto);
        return {
            status:true,
            message : "음원을 생성했습니다."
        }
    }
    /**
     * 
     * 음원 리스트 조회 기능
     * 
     * Query 를 통해 받은 GetSoundtrackQuery (skip,orderBy,take) 를 통해 Soundtrack (id,name,category) [] 을 찾아 반환한다.
     * 
     * @tag soundtrack
     * @param getSoundtrackQuery 
     * @returns 
     */
    @TypedRoute.Get()
    async getSoundtracks(@TypedQuery()getSoundtrackQuery : GetSoundtrackQuery):Promise<Try<GetSoundtracksResponseDto[]>>{
        const data = await this.soundtrackService.getMany(getSoundtrackQuery);
        return {
            status:true,
            data
        }
    }
    /**
     * 
     * 음원 조회 기능
     * 
     * Param 을 통해 받은 trackId 를 통해 Soundtrack ("id"|"category"|"creatorId"|"singer"|"maxFormat"|"albumName"|"name") 을 찾아 반환한다.
     * 
     * @tag soundtrack
     * @param trackId 
     * @returns 
     */
    @TypedRoute.Get("/:trackId")
    async getgetSoundtrack(@TypedParam("trackId")trackId : number):Promise<Try<GetSoundtrackResponseDto>>{
        const data = await this.soundtrackService.getOne(trackId);
        return {
            status:true,
            data
        }
    }
    /**
     * 
     * 음원 수정 기능
     * 
     * email 을 통해 작성자와 일치한지 확인 후 , updateSoundtrackRequestDto ("albumName"|"category"|"name"|"singer"|"maxFormat") 를 통해 수정한다.
     * 
     * @tag soundtrack
     * @security bearer
     * @param email 
     * @param trackId 
     * @param updateSoundtrackRequestDto 
     * @returns 
     */
    @TypedRoute.Patch("/:trackId")
    @UseGuards(JwtAuthGuard)
    async updateSoundtrack(@Email()email:string,@TypedParam("trackId")trackId : number,@TypedBody()updateSoundtrackRequestDto : UpdateSoundtrackRequestDto) : Promise<Try<null>>{
        await this.soundtrackService.update(email,trackId,updateSoundtrackRequestDto);
        return {
            status:true,
            message:"음원을 수정했습니다."
        }
    }
    /**
     * 
     * 음원 삭제 기능
     * 
     * email 을 통해 작성자와 일치한지 확인 후 , 음원을 삭제한다.
     * @tag soundtrack
     * @security bearer
     * @param email 
     * @param trackId 
     * @returns 
     */
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