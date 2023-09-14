import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

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
