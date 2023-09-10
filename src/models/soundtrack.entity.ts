import { Column, Entity, JoinColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CommonBaseEntity } from "./common/common-base.entity";
import User from "./user.entity";

@Entity({name:"soundtrack",synchronize:true})
export default class SoundtrackEntity extends CommonBaseEntity{

    /**
     * 음원 Id
     */
    @PrimaryGeneratedColumn("increment")
    id:string

    /**
     * 음원 생성자 Email
     */
    @Column({name:"creator_email"})
    creatorId:string

    /**
     * 
     */
    @JoinColumn({name:"creator_email",referencedColumnName:"email"})
    creator : User;

    /**
     * 음원의 장르
     * 
     */
    @Column({ nullable: false})
    category: string;

    /**
     * 음원의 이름
     */
    @Column({})
    name : string;

    /**
     * 음원의 최대 음질 ( FLAC , ALAC , MP3 )
     */
    @Column({name:"max_format",default:"MP3"})
    maxFormat: string;
    
    /**
     * 음원의 가수
     */
    @Column({name:"max_format",default:"MP3"})
    singer: string;

    /**
     * 음원의 앨범
     */
    @Column({name:"album_name"})
    albumName : string;

}