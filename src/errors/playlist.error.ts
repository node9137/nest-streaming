import { CommonBaseError } from "./common-base.error";

export interface NotExistedPlaylist extends CommonBaseError{
    status : false;
    businessCode : 1021,
    message:"정보에 일치하는 플레이리스트가 없습니다."
}

export interface NotMatchedUser extends CommonBaseError{
    status : false;
    businessCode : 1022,
    message:"플레이리스트 생성자가 아닙니다."
}