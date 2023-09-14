import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";


export abstract class CommonBaseEntity extends BaseEntity{
    
    @CreateDateColumn({ name: "created", select: false })
    public readonly created!: Date | string;
    @UpdateDateColumn({ name: "revised", select: false })
    public readonly revised!: Date | string;
}