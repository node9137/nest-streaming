import crypto from 'crypto'
import { randomSalt } from './randomSalt';
export function hashPassword(password: string): string {
    const salt = randomSalt()
    const hash = crypto.createHash('sha256'); // 해시 알고리즘 선택 (여기서는 SHA-256 사용)
    hash.update(password + salt); // 비밀번호와 솔트를 결합하여 해시 생성
    const hashedPassword = hash.digest('hex'); // 해시 결과를 16진수 문자열로 반환
    return hashedPassword;
  }