import { isEmpty } from "class-validator";
import { CommonBaseEntity } from "./common/common-base.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import PromotionEntity from "@models/promotion.entity";
import { Optional } from "@nestjs/common";


@Entity({name:"payment",synchronize:true})
export default class PaymentEntity extends CommonBaseEntity{
    @PrimaryGeneratedColumn({ name : 'id'})
    id : number
 
    @Column()
    creator : string;
    
    @CreateDateColumn()
    created : Date;

    @CreateDateColumn()
    revised : Date;

    @Column()
    amount : number;

    @Column()
    actual_amount : number;

    @Column({nullable:true})
    promotion_id : number;
}