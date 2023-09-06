import { UserModule } from '@modules/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
console.log(process.cwd())
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type:"mysql",
    host:"127.0.0.1",
    username:"root",
    password:"1234",
    port:3306,
    database:"nest-streaming",
    entities : []
    
  })
  
  ,
  UserModule
],
  controllers: [],
  providers: [],
})

export class AppModule {}
