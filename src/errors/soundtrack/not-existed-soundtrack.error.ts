import { ExceptionBase } from "../exception.base";

export class NotExistedSoundtrack extends ExceptionBase{
    static readonly message = "정보에 일치하는 음원이 없습니다."
    public readonly code = 'SOUNDTRACK.NOT_EXIST'
    static readonly businessCode = 1012
    constructor(cause?:Error,metadata?:unknown){
        super(NotExistedSoundtrack.message,NotExistedSoundtrack.businessCode,cause)
    }
}