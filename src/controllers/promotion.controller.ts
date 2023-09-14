import UserEntity from '@models/user.entity';
import { TypedBody, TypedRoute } from '@nestia/core';
import { Body, Controller, Get, ParseIntPipe, Post, Put, Query, Req, UseGuards, ValidationPipe, Delete } from '@nestjs/common';
import { PromotionService } from '@services/promotion.service';
import { Email } from 'src/decorators/email.decorator';
import { JwtPayload } from 'src/decorators/jwt-payload.decorator';
import { PromotionCreateDto, PromotionUpdateDto } from 'src/dtos/promotion.dto';
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
    
    @UseGuards(JwtAuthGuard)
    @Get("findPromotion")    
    async finePromotionOne(
        @Query( 'id', ParseIntPipe) id : number,
        @Email() email
    ) {
        return this.promotionService.findPromotionService(id)
    }


    @UseGuards(JwtAuthGuard)
    @Get("findPromotionAll")    
    async finePromotionAll(@Req() req,) {
        return this.promotionService.findPromotionAllService()
    }

    @UseGuards(JwtAuthGuard)
    @Put("updatePromotion")
    async updatePromotionAll(
        @Query( 'id', ParseIntPipe) id : number,
        @Email() email,
        @Body(new ValidationPipe) data: PromotionUpdateDto,
    ) {
        return this.promotionService.updatePromotionService(id, data)
    }

    @UseGuards(JwtAuthGuard)    
    @Delete("deletePromotion")
    async deletePromotion(
        @Query( 'id', ParseIntPipe) id : number,
    ) {
        return this.promotionService.deletePromotionService(id)
    }
}
