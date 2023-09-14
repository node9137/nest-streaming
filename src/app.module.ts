import { SoundtrackModule } from '@modules/soundtrack.module';
import { UserModule } from '@modules/user.module';
import { PromotionModule } from '@modules/promotion.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    synchronize: true
    entities : ["dist/**/*.entity.js"],
  })
  ,
  PromotionModule,
  SoundtrackModule,
  UserModule
],
  controllers: [],
  providers: [],
  exports:[TypeOrmModule]
})

export class AppModule {}
