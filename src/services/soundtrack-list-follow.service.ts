import { Injectable } from "@nestjs/common";
import { SoundtrackListFollowRepository } from "@repositories/soundtrack-list-follow.repository";

@Injectable()
export class SoundtrackListFollowService{
    constructor(
        private readonly soundtrackListFollowRepository : SoundtrackListFollowRepository
    ){}
}