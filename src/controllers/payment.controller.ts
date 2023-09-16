import { Email } from '@decorators/email.decorator';
import { Controller, Post, UseGuards, Get, Put, Delete, Query, Req, Body, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '@providers/jwt-auth.guard';
import { PaymentService } from '@services/payment.service';
import { PaymentCreateDto } from 'src/dtos/payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService : PaymentService){
    }

    @UseGuards(JwtAuthGuard)
    @Post("createPayment")
    async createPromotion(
        @Body(new ValidationPipe) data: PaymentCreateDto,
        @Email() email        
    ){
        return this.paymentService.createPaymentService(email, data);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get("findPayment")    
    async finePromotionOne(
        @Query( 'id', ParseIntPipe) id : number,
    ) {
        return this.paymentService.findPaymentService(id)
    }


    @UseGuards(JwtAuthGuard)
    @Get("findPaymentAll")    
    async finePromotionAll() {
        return this.paymentService.findPaymentAllService()
    }

    @UseGuards(JwtAuthGuard)
    @Put("updatePayment")
    async updatePromotionAll(
    ) {
        return this.paymentService.updatePaymentService()
    }

    @UseGuards(JwtAuthGuard)    
    @Delete("deletePayment")
    async deletePromotion(
    ) {
        return this.paymentService.deletePaymentService()
    }
}
