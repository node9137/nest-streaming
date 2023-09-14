import PromotionEntity from "@models/promotion.entity";
import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";

@CustomRepository(PromotionEntity)
export class PromotionRepository extends Repository<PromotionEntity>{
}