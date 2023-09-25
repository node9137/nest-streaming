import { ExceptionBase } from "../exception.base";

export class NotMatchedSoundtrackCreatedUser extends ExceptionBase{
    static readonly message = "음원 생성자가 아닙니다."
    public readonly code = 'SOUNDTRACK.NOT_MATCHED_SOUNDTRACK_CREATED_USER'
    static readonly businessCode = 1013
    constructor(cause?:Error,metadata?:unknown){
        super(NotMatchedSoundtrackCreatedUser.message,NotMatchedSoundtrackCreatedUser.businessCode,cause)
    }
}