import { CommonBaseError } from "./common-base.error";

export interface AlreadyExistedUser extends CommonBaseError{
    status : false;
    businessCode : 1001,
    message:"이미 존재하는 회원입니다."
}