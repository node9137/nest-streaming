import UserEntity from "@models/user.entity";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import {ExtractJwt, Strategy} from 'passport-jwt';
import { UserRepository } from "src/repositories/user.repository";
import { NotExistedUser } from "src/errors/not-existed-user.error";
import typia from "typia";
import { JwtPayloadType } from "./token.type";


@Injectable()
export class JwtStragety extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : "1234"
        })
    }
    async validate(payload:JwtPayloadType){
        const {email} = payload;
        const user: UserEntity | null = await this.userRepository.findOne({ where: { email } })
        if (!user) {
            throw typia.random<NotExistedUser>();
        }
        return user
    }   
}