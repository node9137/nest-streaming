import {Controller } from "@nestjs/common";
import { SoundtrackService } from "@services/soundtrack.service";

@Controller('soundtrack')
export class SoundtrackController{
    constructor(private readonly soundtrackService : SoundtrackService){
    }
    


    
}