import { CommonBaseEntity } from "./common/common-base.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PaymentEntity from "./payment.entity";

@Entity({name:"promotion",synchronize:true})
export default class PromotionEntity extends CommonBaseEntity{
    @PrimaryGeneratedColumn({ name : 'id'})
    id : number

    @Column()
    type : string;

    @Column()
    creator : string;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    data : Number;

    @Column()
    startAt : Date;

    @Column()
    endAt : Date;
    
    @Column()
    code : string;

    @CreateDateColumn()
    created : Date;

    @CreateDateColumn()
    revised : Date;
}