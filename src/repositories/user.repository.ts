import UserEntity from "@models/user.entity";
import { CustomRepository } from "@libs/typeorm/custom-typeorm.decorator";
import { Repository } from "typeorm";

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

} 