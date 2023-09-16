import { ExceptionBase } from "../exception.base"

export class NotValidatedPassword extends ExceptionBase{
    static readonly message = "비밀번호가 틀립니다."
    public readonly code = 'USER.NOT_VALIDATED_PASSWORD'
    static readonly businessCode = 1003
    constructor(cause?:Error,metadata?:unknown){
        super(NotValidatedPassword.message,NotValidatedPassword.businessCode,cause)
    }
}