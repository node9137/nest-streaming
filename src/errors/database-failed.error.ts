import { ExceptionBase } from "./exception.base";

export class DatabaseFailedException extends ExceptionBase {
    static readonly message = "디비 처리중 오류입니다.";

    static readonly businessCode = 1000
    public readonly code = 'DATABASE_FAILED'

    constructor(cause?:Error) {
      super(DatabaseFailedException.message,DatabaseFailedException.businessCode,cause);
    }
  
  }
  