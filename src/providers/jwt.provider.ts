import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayloadType } from "./token.type";


@Injectable()
export class JwtProvider {
    private readonly jwtSecretKey : string;
    constructor(private readonly jwtService : JwtService){
        this.jwtSecretKey = "1234";
    }
    generateToken(payload:JwtPayloadType):string{
        return this.jwtService.sign(payload,{secret:this.jwtSecretKey})
    }
    decodeToken(token:string){
        return this.jwtService.verify(token,{
             secret:this.jwtSecretKey
        })
    }
}