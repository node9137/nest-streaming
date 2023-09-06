import { Column, Entity, PrimaryColumn } from "typeorm";
import { CommonBaseEntity } from "./common/common-base.entity";

@Entity({name:"user",synchronize:true})
export default class UserEntity extends CommonBaseEntity{
    /**
     * 사용자의 Email 주소
     * @format email
     */
    @PrimaryColumn()
    email!: string;

    /**
     * 사용자의 비밀번호
     * @pattern ^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d`-~!@#$%^&*()/]{8,16}$
     */
    @Column({ nullable: true, type: String })
    password?: string;

    /**
     * 무작위 생성된 고유 문자열
     */
    @Column({nullable:true , length : 150})
    salt ?: string;

    /**
     * 사용자의 등급 구분 (일반 사용자 , 프리미엄 사용자)
     */
    @Column({nullable:true})
    rule ?: string;
    /**
     * 사용자의 이름
     */
    @Column({nullable:true})
    name ?: string;

    /**
     * 사용자의 팔로우 목록
     */
    @Column({type:"json",nullable:true})
    followList ?: string[]

    /**
     * 만료 기한
     */
    @Column({nullable:true})
    expirationTime ?: Date


}