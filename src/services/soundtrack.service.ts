import SoundtrackEntity from "@models/soundtrack.entity";
import { Inject, Injectable } from "@nestjs/common";
import { SoundtrackRepository } from "@repositories/soundtrack.repository";
//import { SoundtrackRepository } from "@repositories/soundtrack.repository";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { GetSoundtrackQuery } from "src/dtos/soundtrack/get-soundtracks-query.dto";
import { UpdateSoundtrackRequestDto } from "src/dtos/soundtrack/update-soundtrack-request.dto";
import { NotExistedSoundtrack } from "src/errors/soundtrack/not-existed-soundtrack.error";
import { NotMatchedUser } from "src/errors/soundtrack/not-matched-user.error";
import { Repository } from "typeorm";
import typia from "typia";



@Injectable()
export class SoundtrackService{
    constructor(
        @Inject('SOUNDTRACK_REPOSITORY')
        private readonly soundtrackRepository : SoundtrackRepository){}
    async create(email:string,createSoundtrackRequestDto : CreateSoundtrackRequestDto){
            return await this.soundtrackRepository.save({creatorId:email,...createSoundtrackRequestDto})
    }
    async update(email:string,trackId : number,updateSoundtrackRequestDto:UpdateSoundtrackRequestDto){
        const record = await this.soundtrackRepository.findOne({where:{id:trackId}});
        if(!record)
            throw typia.random<NotExistedSoundtrack>();
        if (record.creatorId!==email)
            throw typia.random<NotMatchedUser>();
        return await this.soundtrackRepository.update(trackId,updateSoundtrackRequestDto);
    }   
    async delete(email:string,trackId : number){
        const record = await this.soundtrackRepository.findOne({where:{id:trackId}});
        if(!record)
            throw typia.random<NotExistedSoundtrack>();
        if (record.creatorId!==email)
            throw typia.random<NotMatchedUser>();

        return await this.soundtrackRepository.delete(trackId);
    }
    async getOne(trackId : number){
        const record = await this.soundtrackRepository.findOne({where:{id:trackId}});
        if(!record)
            throw typia.random<NotExistedSoundtrack>();
        return record;
        }
    async getMany(getSoundtrackQuery : GetSoundtrackQuery){
        const {orderBy,skip,take}=getSoundtrackQuery;
        const records = await this.soundtrackRepository.find({skip,order:{created:orderBy},select:{id:true,name:true,category:true},take})
        return records;
    }
}