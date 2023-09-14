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
    entities : ["dist/**/*.entity.js"],
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
  exports:[TypeOrmModule]
})

export class AppModule {}
