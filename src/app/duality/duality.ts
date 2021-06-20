import {Md5} from 'ts-md5';
import {UnendingSourceOfChaos} from './unending-source-of-chaos';

export class Duality {
  readonly cypher: string;
  readonly fakePassword: string;
  constructor(cypher, fakePassword) {
    this.cypher = cypher;
    this.fakePassword = fakePassword;
  }

  static encrypt(secret: string, fakeSecret: string, password: string): Duality {
    const base64Secret = btoa(secret);
    const base64FakeSecret = btoa(fakeSecret);
    const base64Password = btoa(password);

    const md5Password = Md5.hashStr(password);
    const md5Base64Password = Md5.hashStr(base64Password);
    const strongPassword = Array(2).fill(base64Password).join(md5Password);
    const md5StrongPassword = Md5.hashStr(strongPassword);

    // tslint:disable:no-console
    console.info('password:', password);
    console.info('md5Password:', md5Password);
    console.info('md5Base64Password:', md5Base64Password);
    console.info('strongPassword:', strongPassword);
    console.info('md5StrongPassword:', md5StrongPassword);


    const chaos = new UnendingSourceOfChaos(md5StrongPassword);



    return new Duality('', '');
  }

  static decrypt(cypher: string, REAL_PASSWORD: string): string {
    return 'Not implemented yet :(';
  }
}
