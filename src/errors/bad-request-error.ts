import { ExceptionBase } from "./exception.base";

export class BadRequestException extends ExceptionBase {
    static readonly message = "잘못된 요청입니다.";

    static readonly businessCode = 1000
    public readonly code = 'BAD_REQUEST'

    constructor(cause?:Error) {
      super(BadRequestException.message,BadRequestException.businessCode,cause);
    }
  
  }
  