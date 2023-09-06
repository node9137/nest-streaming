import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "./common/common-base.entity";

@Entity({name:"user",synchronize:false})
export default class UserEntity extends CommonBaseEntity{
    /**
     * 사용자의 Email 주소
     * @format email
     */
    @Column({ length: 45 })
    email!: string;

    /**
     * 사용자의 비밀번호
     * @pattern ^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d`-~!@#$%^&*()/]{8,16}$
     */
    @Column({ nullable: true, type: String })
    password?: string | null;

    /**
     * 무작위 생성된 고유 문자열
     */
    @Column({nullable:true , length : 150})
    salt ?: string | null;

    /**
     * 사용자의 등급 구분 (일반 사용자 , 프리미엄 사용자)
     */
    @Column({nullable:true})
    rule ?: string | null
    /**
     * 사용자의 이름
     */
    @Column({nullable:true})
    name ?: string | null

    /**
     * 사용자의 팔로우 목록
     */
    @Column({type:"array",nullable:true})
    followList ?: JSON

    /**
     * 만료 기한
     */
    @Column({nullable:true})
    expirationTime ?: Date


}