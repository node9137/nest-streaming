import { Injectable } from '@nestjs/common';
import { PaymentRepository } from "@repositories/payment.repository";
import { PromotionRepository } from '@repositories/promotion.repository';
import { UserRepository } from '@repositories/user.repository';
import { PaymentCreateDto } from 'src/dtos/payment.dto';
import * as moment from "moment-timezone";

@Injectable()
export class PaymentService {
    constructor(
        private readonly paymentRepository : PaymentRepository,
        private readonly promotionRepository : PromotionRepository,
        private readonly userRepository : UserRepository
        ){}

    public async createPaymentService(email : string, data : PaymentCreateDto){
        data.creator = email        
        data = await this.checkPromotion(data)            
        return await this.paymentRepository.save({...data})    
    }

    public async findPaymentService(){
        return await "1"
    }

    public async findPaymentAllService(){
        return await "1"
    }

    public async updatePaymentService(){        
        return await "1"
    }

    public async deletePaymentService(){
        return await "1"
    }
    async getPromotionByCode(code: string) {
        return this.promotionRepository.findOne({where:{code}});
    }

    async getUserByEmail(email: string) {
        return this.userRepository.findOneBy({email});
    }

    async userRoleChange(email: string) {    
        let expirationTime = moment().add(1, 'months').format('YYYY-MM-DD');
        let role = "payment_user" 
        let user = this.getUserByEmail(email)
        await this.userRepository.update({email}, {role, expirationTime});
    }

    async checkPromotion(data : PaymentCreateDto){
        data.actual_amount = data.amount
        if(data.promotion_code == undefined) return data
        const promotion = await this.getPromotionByCode(data.promotion_code)
        if(!promotion) return data
        if(promotion.type == "discount"){
            data.promotion_id = promotion.id
            data.actual_amount = data.amount - (data.amount * (Number(promotion.data) / 100))     
            this.userRoleChange(data.creator)
            return data
        }
        else{ return data }
    }
        
}