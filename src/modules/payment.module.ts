import { Module } from '@nestjs/common';
import { PaymentController } from '@controllers/payment.controller';
import { PaymentService } from '@services/payment.service';
import { PaymentRepository } from '@repositories/payment.repository';
import { CustomTypeOrmModule } from '@libs/typeorm/custom-typeorm.module';
import { PromotionRepository } from '@repositories/promotion.repository';
import { UserRepository } from '@repositories/user.repository';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([PaymentRepository, PromotionRepository, UserRepository])],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
