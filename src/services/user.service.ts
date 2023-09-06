import { Injectable } from "@nestjs/common";
import { hashPassword } from "@utils/hashPassword";
import { RegisterRequesetDto } from "src/dtos/register-request.dto";
import { AlreadyExistedUser } from "src/errors/already-existed-user.error";
import { UserRepository } from "src/repositories/user.repository";
import typia from "typia";



@Injectable()
export class UserService{
    constructor(
        private readonly userRepository : UserRepository
    ){}
    public async register(registerRequestDto:RegisterRequesetDto){
        const {email,password} = registerRequestDto
        const isExistedUser = await this.userRepository.findOne({where:{email}})
        if(isExistedUser)
            throw typia.random<AlreadyExistedUser>();

        if(password)
            registerRequestDto.password = hashPassword(password)
        await this.userRepository.save({...registerRequestDto})
        return
    }
}