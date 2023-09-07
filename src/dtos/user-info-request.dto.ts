import User from "@models/user.entity";


export type UserInfoRequesetDto = Pick<User,|"name"|"password"|"role">