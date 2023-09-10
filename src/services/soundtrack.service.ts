import { Injectable } from "@nestjs/common";
import { CreateSoundtrackRequestDto } from "src/dtos/create-soundtrack-request.dto";
import { SoundtrackRepository } from "src/repositories/soundtrack.repository";




@Injectable()
export class SoundtrackService{
    constructor(private readonly soundtrackRepository : SoundtrackRepository){}
    async create(email:string,createSoundtrackRequestDto : CreateSoundtrackRequestDto){
        this.soundtrackRepository.create({creatorId:email,...createSoundtrackRequestDto})
    }
}