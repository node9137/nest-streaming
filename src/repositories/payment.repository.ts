import PromotionEntity from "@models/promotion.entity";
import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";
import PaymentEntity from "@models/payment.entity";

@CustomRepository(PaymentEntity)
export class PaymentRepository extends Repository<PaymentEntity>{
}