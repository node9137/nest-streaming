import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    BadRequestException,
  } from "@nestjs/common";
  import { HttpAdapterHost } from "@nestjs/core";
import { BadRequestException as BadRequest } from "src/errors/bad-request-error";
import { DatabaseFailedException } from "src/errors/database-failed.error";
import { ExceptionBase } from "src/errors/exception.base";
import { ServerFailedException } from "src/errors/server-failed.error";
import { TypeORMError } from "typeorm";
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
      static readonly dbErrorMessage = "데이터베이스 오류입니다.";
    constructor(
      private readonly httpAdapterHost: HttpAdapterHost,
    ) {}
  
    catch(exception: unknown, host: ArgumentsHost): void {
      const { httpAdapter } = this.httpAdapterHost;
      const ctx = host.switchToHttp();
      if(exception instanceof ExceptionBase){
        const data = exception.toJSON();        
        httpAdapter.reply(ctx.getResponse(),data,400);
      }
      else if(exception instanceof BadRequestException){
        httpAdapter.reply(ctx.getResponse(),new BadRequest(),400)
      }
      else if(exception instanceof TypeORMError){
        httpAdapter.reply(ctx.getResponse(),new DatabaseFailedException,400);
      }
      else if(exception instanceof HttpException){
        const status = exception.getStatus();
        httpAdapter.reply(ctx.getResponse(),exception,status);
      }
      else{
        httpAdapter.reply(ctx.getResponse(),new ServerFailedException,500);
      }


    }
  }