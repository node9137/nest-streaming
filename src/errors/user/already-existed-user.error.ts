import { ExceptionBase } from "../exception.base";

export class AlreadyExistedUser extends ExceptionBase{
    static readonly message = "이미 존재하는 회원입니다."
    public readonly code = 'USER.ALREADY_EXIST'
    static readonly businessCode = 1001
    constructor(cause?:Error,metadata?:unknown){
        super(AlreadyExistedUser.message,AlreadyExistedUser.businessCode,cause)
    }
}