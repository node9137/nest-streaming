import UserEntity from "@models/user.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<UserEntity>{

}