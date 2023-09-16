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
        return await "1"
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

}
