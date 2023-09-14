import { SoundtrackFollowListModule } from '@modules/soundtrack-list-follow.module';
import { SoundtrackModule } from '@modules/soundtrack.module';
import { UserModule } from '@modules/user.module';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllExceptionsFilter } from './interceptor/error.interceptor';
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:"mysql",
    host:"127.0.0.1",
    username:"root",
    password:"1234",
    port:3306,
    database:"nest-streaming",
    entities : ["dist/**/*.entity.js"],
    //process.cwd()+"/src/models/*.entity{.ts,.js}"
    logging:"all",
    synchronize:true
  })
  ,


  SoundtrackFollowListModule,
  SoundtrackModule,
  UserModule
],
  controllers: [],
  providers: [{
    provide:APP_FILTER,
    useClass:AllExceptionsFilter
  }],
  exports:[TypeOrmModule]
})

export class AppModule {}
