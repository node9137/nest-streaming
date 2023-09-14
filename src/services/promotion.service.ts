import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomString } from '@utils/randomSalt';
import { randomBytes } from 'crypto';
import moment from 'moment';
import { Charsets } from 'mysql2';
import { PromotionCreateDto, PromotionUpdateDto } from 'src/dtos/promotion.dto';
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

    public async findPromotionService(id : number){
        console.log("id", id)
        return this.promotionRepository.findOne({ where: {id,}})
    }

    public async findPromotionAllService(){
        return this.promotionRepository.find()
    }

    public async updatePromotionService(id: number, data: PromotionUpdateDto){        
        const promotion = await this.getPromotionById(id);        
        if (!promotion) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
        return this.promotionRepository.update(id, {
          ...data,
        });
    }

    public async deletePromotionService(id: number){
        const promotion = await this.getPromotionById(id);        
        if (!promotion) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
        return this.promotionRepository.remove(promotion)
    }

    async getPromotionById(id: number) {
        return this.promotionRepository.findOneBy({id});
    }
}

