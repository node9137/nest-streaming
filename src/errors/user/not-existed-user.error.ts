import { ExceptionBase } from "../exception.base";

export class NotExistedUser extends ExceptionBase{
    static readonly message = "정보에 일치하는 회원이 없습니다."
    public readonly code = 'USER.NOT_EXIST'
    static readonly businessCode = 1002
    constructor(cause?:Error,metadata?:unknown){
        super(NotExistedUser.message,NotExistedUser.businessCode,cause)
    }
}