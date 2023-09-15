import { TypedBody, TypedRoute } from "@nestia/core";
import {Controller, Req, UseGuards } from "@nestjs/common";
import { UserService } from "@services/user.service";
import { LoginRequestDto } from "src/dtos/login-request.dto";
import { RegisterRequesetDto } from "src/dtos/register-request.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService : UserService){
    }
    
    @TypedRoute.Post("register")
    async localRegister(@TypedBody()registerRequestDto : RegisterRequesetDto){
        await this.userService.register(registerRequestDto);
        return {
            status:true,
            message : "회원가입에 성공했습니다."
        }
    }
    @TypedRoute.Post("login")
    async localLogin(@TypedBody()loginRequestDto : LoginRequestDto){
        const token = await this.userService.login(loginRequestDto);
        return {
            status:true,
            message : "로그인에 성공했습니다.",
            data : token
        }
    }   
}   