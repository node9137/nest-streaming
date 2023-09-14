import { CommonBaseError } from "../common-base.error";

export interface NotExistedSoundtrackListFollow extends CommonBaseError{
    status : false;
    businessCode : 1032,
    message:"회원이 팔로우한 음원이 아닙니다."
}