import SoundtrackEntity from "@models/soundtrack.entity";
import { Inject, Injectable } from "@nestjs/common";
//import { SoundtrackRepository } from "@repositories/soundtrack.repository";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { UpdateSoundtrackRequestDto } from "src/dtos/soundtrack/update-soundtrack-request.dto";
import { Repository } from "typeorm";




@Injectable()
export class SoundtrackService{
    constructor(
        @Inject('SOUNDTRACK_REPOSITORY')
        private readonly soundtrackRepository : Repository<SoundtrackEntity>){}
    async create(email:string,createSoundtrackRequestDto : CreateSoundtrackRequestDto){
        try{

            return await this.soundtrackRepository.save({creatorId:email,...createSoundtrackRequestDto})
        }catch(err){
            console.log(err);
            return true
        }
    }
    async update(trackId : string,updateSoundtrackRequestDto:UpdateSoundtrackRequestDto){
        return await this.soundtrackRepository.update(trackId,updateSoundtrackRequestDto);
    }
    async delete(trackId : string){
        return await this.soundtrackRepository.delete(trackId);
    }
    async getOne(trackId : string){
        return await this.soundtrackRepository.findOne({where:{id:trackId}});
    }
    async getMany(){}
}