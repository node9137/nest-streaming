import { Injectable } from '@nestjs/common';
import { randomString } from '@utils/randomSalt';
import { randomBytes } from 'crypto';
import moment from 'moment';
import { Charsets } from 'mysql2';
import { PromotionCreateDto } from 'src/dtos/promotion.dto';
import { PromotionRepository } from "src/repositories/promotion.repository";

@Injectable()
export class PromotionService {
    constructor(
        private readonly promotionRepository : PromotionRepository
    ){}

    public async createPromotionService(email : string, data : PromotionCreateDto){
        data.code = randomString(6)
        data.creator = email        
        return await this.promotionRepository.save({...data})
    }

    public async findPromotionService(){
        return "creteService"
    }

    public async findPromotionAllService(){
        return "findPromotionAllService"
    }

    public async updatePromotionService(){
        return "updatePromotionService"
    }

    public async deletePromotionService(){
        return "deletePromotionService"
    }

}

