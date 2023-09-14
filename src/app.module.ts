import UserEntity from '@models/user.entity';
import { UserModule } from '@modules/user.module';
import { PromotionModule } from '@modules/promotion.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PromotionEntity from '@models/promotion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:"mysql",
    host:"127.0.0.1",
    username:"root",
    password:"1234",
    port:3306,
    database:"nest-streaming",
    entities : [UserEntity, PromotionEntity],
    //process.cwd()+"/src/models/*.entity{.ts,.js}"
    logging:"all",
    synchronize: true
  }),
  UserModule,
  PromotionModule
],
  controllers: [],
  providers: [],
})

export class AppModule {}
