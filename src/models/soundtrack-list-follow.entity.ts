import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonBaseEntity } from "./common/common-base.entity";

@Entity({name:"soundtrackListFollow",synchronize:true})
export default class SoundtrackListFollowEntity extends CommonBaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column()
    soundtrackListId:string

    @Column()
    userEmail:string
}