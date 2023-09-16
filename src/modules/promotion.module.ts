import { Module } from '@nestjs/common';
import { PromotionController } from '@controllers/promotion.controller';
import { PromotionService } from '@services/promotion.service';
import { CustomTypeOrmModule } from '@libs/typeorm/custom-typeorm.module';
import { PromotionRepository } from '@repositories/promotion.repository';


@Module({
    imports: [CustomTypeOrmModule.forCustomRepository([PromotionRepository])],
    controllers: [PromotionController],
    providers: [PromotionService],
})
export class PromotionModule {

}
