import User from "@models/user.entity";


export type LoginRequestDto = Required<Pick<User,|"email"|"password">>
