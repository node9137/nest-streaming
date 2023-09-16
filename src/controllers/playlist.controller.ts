import { Email } from "@decorators/email.decorator";
import { TypedBody, TypedParam, TypedQuery, TypedRoute } from "@nestia/core";
import { Controller, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@providers/jwt-auth.guard";
import { PlaylistService } from "@services/playlist.service";
import { CreateAndUpdatePlaylistRequesetDto, creatorEmailDto } from "src/dtos/playlist/playlist-request.dto";
import { GetPlaylistResponseDto } from "src/dtos/playlist/playlist-response.dto";
import { Try } from "src/types/response.type";

@Controller('playlist')
export class PlaylistController{
    constructor(private readonly playlistService : PlaylistService){
    }
    /**
     * 
     * 플레이리스트 생성 기능
     * 
     * Body 를 통해 받은 soundtracks(음원 아이디 리스트)을 통해 Playlist 를 만든다.
     * 
     * @tag playlist
     * @security bearer
     * @param email 
     * @param createPlaylistRequestDto 
     * @returns 
     */
    @TypedRoute.Post()
    @UseGuards(JwtAuthGuard)
    async createPlaylist(@Email()email : string,@TypedBody()createPlaylistRequestDto : CreateAndUpdatePlaylistRequesetDto) : Promise<Try<null>>{
        await this.playlistService.create(email,createPlaylistRequestDto);
        return {
            status:true,
            message : "플레이리스트를 생성했습니다."
        }
    }
    /**
     * 
     * 플레이리스트 목록 조회 기능
     * 
     * Query 를 통해 받은 유저의 이메일을 받아서 특정 유저의 플레이리스트를 반환한다.
     * 
     * @tag playlist
     * @query creatorEmail
     * @returns 
     */
    @TypedRoute.Get()
    async getPlaylistsByUser(@TypedQuery()creatorEmail : creatorEmailDto):Promise<Try<GetPlaylistResponseDto[]>>{
        const data = await this.playlistService.getMany(creatorEmail);
        return {
            status:true,
            data
        }
    }
    /**
     * 
     * 플레이리스트 상세 조회 기능
     * 
     * Param 을 통해 받은 playlistId 를 통해 상세 리스트를 반환한다.
     * 
     * @tag playlist
     * @param playlistId 
     * @returns 
     */
    @TypedRoute.Get("/:playlistId")
    async getPlaylistById(@TypedParam("playlistId")playlistId : number):Promise<Try<GetPlaylistResponseDto>>{
        const data = await this.playlistService.getOne(playlistId);
        return {
            status:true,
            data
        }
    }
    /**
     * 
     * 플레이리스트 수정 기능
     * 
     * 생성한 유저인지 확인 후 플레이리스트를 전체 수정한다.
     * 
     * @tag playlist
     * @security bearer
     * @param email 
     * @param playlistId 
     * @param updatePlaylistsRequestDto 
     * @returns 
     */
    @TypedRoute.Put("/:playlistId")
    @UseGuards(JwtAuthGuard)
    async updatePlaylist(@Email()email:string,@TypedParam("playlistId")playlistId : number,@TypedBody()updatePlaylistsRequestDto : CreateAndUpdatePlaylistRequesetDto) : Promise<Try<null>>{
        await this.playlistService.update(email,playlistId,updatePlaylistsRequestDto);
        return {
            status:true,
            message:"플레이리스트를 수정했습니다."
        }
    }
    /**
     * 
     * 음원 삭제 기능
     * 
     * 생성한 유저인지 확인 후 플레이리스트를 삭제한다.
     * @tag playlist
     * @security bearer
     * @param email 
     * @param playlistId
     * @returns 
     */
    @TypedRoute.Delete("/:playlistId")
    @UseGuards(JwtAuthGuard)
    async deletePlaylist(@Email()email:string,@TypedParam("playlistId")playlistId : number):Promise<Try<null>>{
        await this.playlistService.delete(email,playlistId);
        return {
            status:true,
            message:"플레이리스트를 삭제했습니다."
        }
    }
    
}