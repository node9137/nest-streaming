import { CommonBaseError } from "./common-base.error";

export interface NotValidatedPassword extends CommonBaseError{
    status : false;
    businessCode : 1003,
    message:"비밀번호가 틀립니다."
}