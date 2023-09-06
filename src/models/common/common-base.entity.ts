import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";


export abstract class CommonBaseEntity extends BaseEntity{
    @PrimaryColumn("uuid")
    public readonly id! : string
    
    @CreateDateColumn({ name: "created", select: false })
    public readonly created!: Date | string;
    @UpdateDateColumn({ name: "revised", select: false })
    public readonly revised!: Date | string;
}