import { Injectable } from "@nestjs/common";
import { SoundtrackListFollowRepository } from "@repositories/soundtrack-list-follow.repository";
import { UserRepository } from "@repositories/user.repository";
import { NotExistedUser } from "src/errors/user/not-existed-user.error";
import { NotExistedSoundtrackListFollow } from "src/errors/soundtrackListFollow/not-existed-soundtrackListFollow.error";
import typia from "typia";

@Injectable()
export class SoundtrackListFollowService{
    constructor(
        private readonly userRepository : UserRepository,

        private readonly soundtrackListFollowRepository : SoundtrackListFollowRepository
    ){}
    async create(email:string,soundtrackListId:string){
        const user = await this.userRepository.findOne({where:{email}});
        if(!user)
            throw typia.random<NotExistedUser>();
        /**
         * 차후 , SoundtrackList Repository 추가 하여 , 존재하는지 검증 해야함.
         */
        return await this.soundtrackListFollowRepository.save({userEmail:email,soundtrackListId});
    }
    async delete(email:string,soundtrackListId:string){
        const user = await this.userRepository.findOne({where:{email}});
        if(!user)
            throw typia.random<NotExistedUser>();
        /**
         * 차후 , SoundtrackList Repository 추가 하여 , 존재하는지 검증 해야함.
         */

        const record = await this.soundtrackListFollowRepository.findOne({where:{userEmail:email,soundtrackListId:soundtrackListId}});
        if(!record)
            throw typia.random<NotExistedSoundtrackListFollow>();
        return await this.soundtrackListFollowRepository.delete(record.id);
    }
}