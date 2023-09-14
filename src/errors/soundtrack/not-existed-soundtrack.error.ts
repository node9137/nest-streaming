import { CommonBaseError } from "../common-base.error";

export interface NotExistedSoundtrack extends CommonBaseError{
    status : false;
    businessCode : 1012,
    message:"정보에 일치하는 음원이 없습니다."
}