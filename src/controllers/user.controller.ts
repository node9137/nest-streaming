import { TypedBody, TypedRoute } from "@nestia/core";
import {Controller } from "@nestjs/common";
import { UserService } from "@services/user.service";
import { RegisterRequesetDto } from "src/dtos/register-request.dto";
import typia from "typia";

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
}   