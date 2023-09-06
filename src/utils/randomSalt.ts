import {randomBytes} from 'crypto'
export function randomSalt(length : number = 16):string{
    const salt = randomBytes(length);

    // 바이트를 16진수 문자열로 변환
    const saltHex = salt.toString('hex');
  
    return saltHex;
}