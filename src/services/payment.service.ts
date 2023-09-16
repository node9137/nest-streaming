import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaymentRepository } from "@repositories/payment.repository";
import { PromotionRepository } from '@repositories/promotion.repository';
import { UserRepository } from '@repositories/user.repository';
import { PaymentCreateDto, PaymentUpdateDto } from 'src/dtos/payment.dto';
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

    public async findPaymentService(id : number){
        return await this.paymentRepository.findOne({ where: {id}})
    }
    public async findPaymentAllService(){
        return await this.paymentRepository.find()
    }

    public async updatePaymentService(id: number, data: PaymentUpdateDto){        
        const payment = await this.getPaymentById(id);        
        if (!payment) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
        return this.paymentRepository.update(id, {
          ...data,
        });
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

    async getPaymentById(id: number) {
        return this.paymentRepository.findOneBy({id});
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