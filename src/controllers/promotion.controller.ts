import UserEntity from '@models/user.entity';
import { TypedBody, TypedRoute } from '@nestia/core';
import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { PromotionService } from '@services/promotion.service';
import { Email } from 'src/decorators/email.decorator';
import { JwtPayload } from 'src/decorators/jwt-payload.decorator';
import { PromotionCreateDto } from 'src/dtos/promotion.dto';
import { JwtAuthGuard } from 'src/providers/jwt-auth.guard';

@Controller('promotion')
export class PromotionController {
    constructor(private readonly promotionService : PromotionService){
    }

    @UseGuards(JwtAuthGuard)
    @Post("createPromotion")
    async createPromotion(
        @Body(new ValidationPipe) data: PromotionCreateDto,
        @Email() email
    ){
        return this.promotionService.createPromotionService(email, data)
    }
    
    @TypedRoute.Get("findPromotion")
    async finePromotionOne(@Req() req,) {
        return this.promotionService.findPromotionService()
    }

    @TypedRoute.Get("findPromotionAll")
    async finePromotionAll(@Req() req,) {
        return this.promotionService.findPromotionAllService()
    }


    @TypedRoute.Put("updatePromotion")
    async updatePromotionAll(@Req() req,) {
        return this.promotionService.updatePromotionService()
    }

    @TypedRoute.Delete("deletePromotion")
    async deletePromotion(@Req() req,) {
        return this.promotionService.deletePromotionService()
    }
}
