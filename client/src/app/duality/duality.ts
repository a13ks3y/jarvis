import {Md5} from 'ts-md5';
import {UnendingSourceOfChaos} from './unending-source-of-chaos';

export class Duality {
  readonly cypher: string;
  readonly fakePassword: string;
  private constructor(cypher, fakePassword) {
    this.cypher = cypher;
    this.fakePassword = fakePassword;
  }

  static encrypt(secret: string, fakeSecret: string, password: string): Duality {
    const pipka = Symbol;
    let cypher = Array(secret.length * fakeSecret.length).fill(pipka);
    const backwardPassword = password.split('').reverse().join('');
    const fakePassword = `${password}_trollface.jpg_${backwardPassword}`;
    const baseSeed = Date.now().toString(16);
    const baseChaos = new UnendingSourceOfChaos(baseSeed);
    const secretChaos = new UnendingSourceOfChaos(Md5.hashStr(password));
    const fakeSecretChaos = new UnendingSourceOfChaos(Md5.hashStr(fakePassword));
    let secretIndex = 0, fakeSecretIndex = 0;
    cypher.forEach((c, index) => {
      const chaos = baseChaos.next().value;      
      const sc = secretChaos.next().value;
      const fc = fakeSecretChaos.next().value;
      const cryptedSecretChar = String.fromCharCode(secret.charCodeAt(secretIndex) ^ sc);
      const cryptedFakeSecretChar = String.fromCharCode(fakeSecret.charCodeAt(fakeSecretIndex) ^ fc);
      if (secretIndex < secret.length || fakeSecretIndex < fakeSecret.length) {
        if (sc % 2 == 0 && sc % 3 == 0) {
          cypher[index] = cryptedSecretChar;
          cypher[cypher.length - index] = cryptedFakeSecretChar;
        } else if (sc % 3 === 0) {
          cypher[cypher.length - index] = cryptedSecretChar;
          cypher[index] = cryptedFakeSecretChar;
        }  
        if (sc % 2 === 0 || sc % 3 === 0) {
          secretIndex++;
          fakeSecretIndex++;
  
        }
      }
      if (cypher[index] === pipka) {
        cypher[index] = chaos;
      }
    });
    return new Duality(btoa(cypher.join('')), fakePassword);
  }

  static decrypt(cypher: string, password: string): string {
    const chaos = atob(cypher).split('');
    const secretChaos = new UnendingSourceOfChaos(Md5.hashStr(password));
    const secret = [];
    let secretIndex = 0;
    chaos.some((c, index) => {
      let cc;
      const sc = secretChaos.next().value;
        if (secretIndex < secret.length) {
          if (sc % 2 == 0 && sc % 3 == 0) {
            cc = chaos[index];
          } else if (sc % 3 === 0) {
            cc = chaos[cypher.length - index];
          }  
          if (sc % 2 === 0 || sc % 3 === 0) {
            const uncryptedSecretChar = String.fromCharCode(cc.charCodeAt(0) ^ sc);
            secret.push(uncryptedSecretChar);
            secretIndex++;
          }          
        } else {
          return true;
        }
        return false;
    });
   return secret.join('');
  }
}
