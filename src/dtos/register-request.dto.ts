import User from "@models/user.entity";


export type RegisterRequesetDto = Pick<User,|"email"|"password">