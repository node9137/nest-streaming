
export interface SerializedException {
  message: string;
  code: string;
  stack?: string;
  cause?: string;
  businessCode?:number;
  metadata?: unknown;
}

export abstract class ExceptionBase extends Error {
  abstract code: string;
  public readonly correlationId: string;

  constructor(
    readonly message: string,
    readonly businessCode:number,
    readonly cause?: Error
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      businessCode : this.businessCode,
      cause: JSON.stringify(this.cause),
    };
  }
}