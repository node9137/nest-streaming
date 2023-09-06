import { CommonBaseError } from "./common-base.error";

export interface NotExistedUser extends CommonBaseError{
    status : false;
    businessCode : 1002,
    message:"정보에 일치하는 회원이 없습니다."
}