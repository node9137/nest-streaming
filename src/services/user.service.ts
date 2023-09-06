import { Injectable } from "@nestjs/common";
import { hashPassword } from "@utils/hashPassword";
import { validatePassword } from "@utils/validatePassword";
import { LoginRequestDto } from "src/dtos/login-request.dto";
import { RegisterRequesetDto } from "src/dtos/register-request.dto";
import { AlreadyExistedUser } from "src/errors/already-existed-user.error";
import { NotExistedUser } from "src/errors/not-existed-user.error";
import { NotValidatedPassword } from "src/errors/not-validate-password.error";
import { JwtProvider } from "src/providers/jwt.provider";
import { UserRepository } from "src/repositories/user.repository";
import typia from "typia";



@Injectable()
export class UserService{
    constructor(
        private readonly jwtProvider : JwtProvider,
        private readonly userRepository : UserRepository
    ){}
    public async register(registerRequestDto:RegisterRequesetDto){
        const {email,password} = registerRequestDto
        const isExistedUser = await this.userRepository.findOne({where:{email}})
        if(isExistedUser)
            throw typia.random<AlreadyExistedUser>();
        if(password)
            registerRequestDto.password = hashPassword(password);
        await this.userRepository.save({...registerRequestDto});
        return
    }
    public async login(loginRequestDto:LoginRequestDto){
        const {email,password} = loginRequestDto;
        const user = await this.userRepository.findOne({where:{email}});
        if(!user)
            throw typia.random<NotExistedUser>();
        const isValidated = validatePassword(password,user.password!);
        if(isValidated)
            throw typia.random<NotValidatedPassword>();
        const token = this.jwtProvider.generateToken({email});
        return token;
    }
}