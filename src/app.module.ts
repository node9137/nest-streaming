import { PlaylistModule } from '@modules/playlist.module';
import { SoundtrackFollowListModule } from '@modules/soundtrack-list-follow.module';
import { SoundtrackModule } from '@modules/soundtrack.module';
import { UserModule } from '@modules/user.module';
import { PromotionModule } from '@modules/promotion.module';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from './modules/payment.module';
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
    logging:"all",
    synchronize: true,
    entities : ["dist/**/*.entity.js"],
  })
  ,
  SoundtrackFollowListModule,
  PlaylistModule,
  PromotionModule,
  SoundtrackModule,
  UserModule,
  PaymentModule
],
  controllers: [],
  providers: [{
    provide:APP_FILTER,
    useClass:AllExceptionsFilter
  }],
  exports:[TypeOrmModule]
})

export class AppModule {}
