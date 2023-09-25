import { TypedBody, TypedRoute } from "@nestia/core";
import {Controller, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@providers/jwt-auth.guard";
import { UserService } from "@services/user.service";
import { LoginRequestDto } from "src/dtos/login-request.dto";
import { RegisterRequesetDto } from "src/dtos/register-request.dto";
import { UserInfoRequesetDto } from "src/dtos/user-info-request.dto";
import { Try } from "src/types/response.type";

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
    @UseGuards(JwtAuthGuard)
    @TypedRoute.Patch("update")
    async updateUserInfo(@Req() req, @TypedBody()userInfoRequestDto :UserInfoRequesetDto):Promise<Try<null>> {
        const result = await this.userService.updateUserInfo(req.user.email, userInfoRequestDto);
        return {
            status:true,
            message: `회원 정보 수정에 ${result? "성공했습니다." : "실패했습니다."}`
        }
    }
    @UseGuards(JwtAuthGuard)
    @TypedRoute.Delete("signout")
    async userSignOut(@Req() req):Promise<Try<null>> {
        const result = await this.userService.signOut(req.user.email);
        return {
            status:true,
            message: `회원 탈퇴에 ${result? "성공했습니다." : "실패했습니다."}`
        }
    }
}   