import { Post } from "@nestjs/common";
//import { TypedRoute } from "@nestia/core";

/**
 * 차후 Nestia 도입 위한 Wrapping Decorator
 * @param path 
 * @returns 
 */
export const WrapPost = (path?: string | string[]) => Post(path)
//export const WrapPost = (path?: string | string[]) => TypedRoute.Post(path)
