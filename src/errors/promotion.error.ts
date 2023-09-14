import { CommonBaseError } from "./common-base.error";

export interface NotExistedPromotion extends CommonBaseError{
    status : false;
    businessCode : 3001,
    message:"프로모션이 존재하지 않습니다."
}