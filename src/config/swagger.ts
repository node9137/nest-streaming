import { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { readFileSync } from "fs";
import {join} from "path";

export default async function (app: INestApplication) {
  try{
    const swaggerConfig = readFileSync(
      join(process.cwd(), "/bin/swagger.json"),
      "utf-8"
      );
      const swaggerDocument = JSON.parse(swaggerConfig);
      if(swaggerDocument) 
      SwaggerModule.setup("/api-docs", app, swaggerDocument);
  }
  catch{return}

}