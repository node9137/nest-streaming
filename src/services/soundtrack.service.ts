import { Injectable } from "@nestjs/common";
import { CreateSoundtrackRequestDto } from "src/dtos/soundtrack/create-soundtrack-request.dto";
import { UpdateSoundtrackRequestDto } from "src/dtos/soundtrack/update-soundtrack-request.dto";
import { SoundtrackRepository } from "src/repositories/soundtrack.repository";




@Injectable()
export class SoundtrackService{
    constructor(private readonly soundtrackRepository : SoundtrackRepository){}
    async create(email:string,createSoundtrackRequestDto : CreateSoundtrackRequestDto){
        return await this.soundtrackRepository.create({creatorId:email,...createSoundtrackRequestDto})
    }
    async update(trackId : string,updateSoundtrackRequestDto:UpdateSoundtrackRequestDto){
        return await this.soundtrackRepository.update(trackId,updateSoundtrackRequestDto);
    }
    async delete(trackId : string){
        return await this.soundtrackRepository.delete(trackId);
    }
    async getOne(trackId : string){
        this.soundtrackRepository.findOne({where:{id:trackId}});
    }
    async getMany(){}
}