import SoundtrackEntity from "@models/soundtrack.entity";
import { Inject, Injectable } from "@nestjs/common";
import { PlayListRepository } from "@repositories/playlist.repository";
import { CreateAndUpdatePlaylistRequesetDto, creatorEmailDto } from "src/dtos/playlist/playlist-request.dto";
import { NotExistedPlaylist, NotMatchedUser } from "src/errors/playlist.error";
import { DataSource } from "typeorm";
import typia from "typia";



@Injectable()
export class PlaylistService{
    constructor(
        @Inject('PLAYLIST_REPOSITORY')
        private readonly playListRepository : PlayListRepository,
        private dataSource : DataSource){}
    
    async create(email:string,createPlaylistRequesetDto : CreateAndUpdatePlaylistRequesetDto){
        return await this.playListRepository.save({creatorId:email,soundtrackId:createPlaylistRequesetDto.id})
    }
    async update(email:string,playlistId : number,updatePlaylistsRequestDto:CreateAndUpdatePlaylistRequesetDto){
        const record = await this.playListRepository.findOne({where:{id:playlistId}});
        if(!record)
            throw typia.random<NotExistedPlaylist>();
        if (record.creatorId!==email)
            throw typia.random<NotMatchedUser>();
        record.soundtrackId = updatePlaylistsRequestDto.id;
        return await this.playListRepository.save(record);
    }   
    async delete(email:string, playlistId : number){
        const record = await this.playListRepository.findOne({where:{id:playlistId}});
        if(!record)
            throw typia.random<NotExistedPlaylist>();
        if (record.creatorId!==email)
            throw typia.random<NotMatchedUser>();

        return await this.playListRepository.delete(playlistId);
    }
    async getOne(playlistId : number){
        const record = await this.playListRepository.findOne({where:{id:playlistId}});
        if(!record)
            throw typia.random<NotExistedPlaylist>();
        const soundtracks:SoundtrackEntity[] = [];
        for (const soundtrackId of record.soundtrackId) {
            const soundtrackRepository = this.dataSource.getRepository(SoundtrackEntity);
            const selectSoundtrack = await soundtrackRepository.findOne({where: {id: soundtrackId}})
            if (selectSoundtrack) soundtracks.push(selectSoundtrack)
        }
        record.soundtracks = soundtracks;
        return record;
        }
    async getMany(creatorEmail : creatorEmailDto){
        const records = await this.playListRepository.find({order:{created:"ASC"},where:{ creatorId: creatorEmail.creator}});
        for (const record of records) {
            const soundtracks:SoundtrackEntity[] = [];
            for (const soundtrackId of record.soundtrackId) {
                const soundtrackRepository = this.dataSource.getRepository(SoundtrackEntity);
                const selectSoundtrack = await soundtrackRepository.findOne({where: {id: soundtrackId}})
                if (selectSoundtrack) soundtracks.push(selectSoundtrack)
            }
            record.soundtracks = soundtracks;
        }
        return records;
    }
}