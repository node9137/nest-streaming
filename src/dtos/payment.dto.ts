import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UpdateDateColumn } from "typeorm";

export class PaymentCreateDto {
    @IsOptional()
    creator : string;
    @IsNumber()
    @IsOptional()
    amount : number;
    @IsNumber()
    @IsOptional()
    actual_amount : number;
    @IsNumber()
    @IsOptional()
    promotion_id : number;
    @IsString()
    @IsOptional()
    promotion_code : string;
}

export class PaymentUpdateDto {
    @IsOptional()
    creator : string;
    @IsNumber()
    @IsOptional()
    amount : number;
    @IsNumber()
    @IsOptional()
    actual_amount : number;
    @IsNumber()
    @IsOptional()
    promotion_id : number;
    @UpdateDateColumn()
    revised : Date;
}
