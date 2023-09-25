import { ExceptionBase } from "./exception.base";

export class ServerFailedException extends ExceptionBase {
    static readonly message = "서버 에러입니다.";

    static readonly businessCode = 1000
    public readonly code = 'SERVER_FAILED'

    constructor(cause?:Error) {
      super(ServerFailedException.message,ServerFailedException.businessCode,cause);
    }
  
  }
  