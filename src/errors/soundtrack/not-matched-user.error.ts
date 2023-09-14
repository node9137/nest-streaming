import { CommonBaseError } from "../common-base.error";

export interface NotMatchedUser extends CommonBaseError{
    status : false;
    businessCode : 1013,
    message:"음원 생성자가 아닙니다."
}