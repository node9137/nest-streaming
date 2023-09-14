import {randomBytes} from 'crypto'
export function randomSalt(length : number = 16):string{
    const salt = randomBytes(length);
    const saltHex = salt.toString('hex'); 
    return saltHex;
}

export function randomString(length : number = 16):string{
    return randomBytes(length).toString('hex')
}
