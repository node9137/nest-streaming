import UserEntity from '@models/user.entity';
import { UserModule } from '@modules/user.module';
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
    entities : [UserEntity],
    //process.cwd()+"/src/models/*.entity{.ts,.js}"
    logging:"all"
  })
  ,
  
  UserModule
],
  controllers: [],
  providers: [],
})

export class AppModule {}
