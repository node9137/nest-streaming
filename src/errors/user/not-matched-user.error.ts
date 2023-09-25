import { ExceptionBase } from "../exception.base";

export class NotMatchedUser extends ExceptionBase{
    static readonly message = ""
    public readonly code = 'SOUNDTRACK.NOT_MATCHED_USER'
    static readonly businessCode = 1013
    constructor(cause?:Error,metadata?:unknown){
        super(NotMatchedUser.message,NotMatchedUser.businessCode,cause)
    }
}