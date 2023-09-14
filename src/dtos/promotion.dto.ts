import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UpdateDateColumn } from "typeorm";

export class PromotionCreateDto {
    @IsString()
    @IsNotEmpty()    
    type : string;

    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    description : string;

    @IsNumber()
    @IsNotEmpty()
    data : number;

    @IsOptional()
    code : string;

    @IsOptional()
    creator : string;

    @IsOptional()
    startAt : Date;

    @IsOptional()
    endAt : Date;
}

export class PromotionUpdateDto {
    @IsOptional()
    @IsString()
    type : string;
    @IsOptional()
    @IsString()
    name : string;
    @IsOptional()
    @IsString()
    description : string;
    @IsOptional()
    @IsNumber()
    data : number;
    @IsOptional()
    code : string;
    @IsOptional()
    creator : string;
    @IsOptional()
    startAt : Date;
    @IsOptional()
    endAt : Date;
    @UpdateDateColumn()
    revised : Date;
}
