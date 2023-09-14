import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from "@nestjs/common";
  import { HttpAdapterHost } from "@nestjs/core";
import { ExceptionBase } from "src/errors/exception.base";
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    constructor(
      private readonly httpAdapterHost: HttpAdapterHost,
    ) {}
  
    catch(exception: unknown, host: ArgumentsHost): void {
      const { httpAdapter } = this.httpAdapterHost;
      const ctx = host.switchToHttp();
      if(exception instanceof ExceptionBase){
        const data = exception.toJSON();
        httpAdapter.reply(ctx.getResponse(),{status:false,data},400);
      }
      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest())
        };
      httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
  }