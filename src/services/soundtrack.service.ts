import SoundtrackEntity from "@models/soundtrack.entity";
import { Inject, Injectable } from "@nestjs/common";
//import { SoundtrackRepository } from "@repositories/soundtrack.repository";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { UpdateSoundtrackRequestDto } from "src/dtos/soundtrack/update-soundtrack-request.dto";
import { NotExistedSoundtrack } from "src/errors/soundtrack/not-existed-soundtrack.error";
import { NotMatchedUser } from "src/errors/soundtrack/not-matched-user.error";
import { Repository } from "typeorm";
import typia from "typia";



@Injectable()
export class SoundtrackService{
    constructor(
        @Inject('SOUNDTRACK_REPOSITORY')
        private readonly soundtrackRepository : Repository<SoundtrackEntity>){}
    async create(email:string,createSoundtrackRequestDto : CreateSoundtrackRequestDto){
        try{

            return await this.soundtrackRepository.save({creatorId:email,...createSoundtrackRequestDto})
        }catch(err){
            return true
        }
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
    async getMany(){}
}