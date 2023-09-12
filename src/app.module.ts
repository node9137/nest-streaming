import SoundtrackEntity from '@models/soundtrack.entity';
import UserEntity from '@models/user.entity';
import { SoundtrackModule } from '@modules/soundtrack.module';
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
    entities : [UserEntity,SoundtrackEntity],
    //process.cwd()+"/src/models/*.entity{.ts,.js}"
    logging:"all",
    synchronize:true
  })
  ,
  SoundtrackModule,
  UserModule
],
  controllers: [],
  providers: [],
})

export class AppModule {}
