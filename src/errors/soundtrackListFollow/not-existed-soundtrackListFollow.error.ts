import { ExceptionBase } from "../exception.base";

export class NotExistedSoundtrackListFollow extends ExceptionBase{
    static readonly message = "회원이 팔로우한 음원이 아닙니다."
    public readonly code = 'USER.NOT_EXIST'
    static readonly businessCode = 1032
    constructor(cause?:Error,metadata?:unknown){
        super(NotExistedSoundtrackListFollow.message,NotExistedSoundtrackListFollow.businessCode,cause)
    }
}