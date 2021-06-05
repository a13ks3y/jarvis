import {Component, OnInit} from '@angular/core';
import {MegaKey} from "./megaKey";

@Component({
  selector: 'the-xor',
  templateUrl: './xor.component.html',
  styleUrls: ['./xor.component.less']
})
export class XorComponent implements OnInit {
  result: string = '';
  megaKey: MegaKey = new MegaKey('');
  password: string;
  secret: string;

  constructor() { }

  ngOnInit(): void {
  }

  doEncrypt() {
    this.result = this.encrypt(this.password, this.secret);
  }

  encrypt(password: string, secret: string):string {
    this.megaKey = new MegaKey(password);
    const secretBase64 = btoa(secret);
    const keyChars = this.megaKey.md5Key.split('');
    let currentKey = 0;
    const nextChars = this.megaKey.md5Base64.split('').reverse().map(char => {
      const charCode = char.charCodeAt(0);
      const keyCode = keyChars[currentKey].charCodeAt(0);
      currentKey = currentKey >= keyChars.length ? 0 : currentKey + 1;
      return String.fromCharCode(charCode ^ keyCode);
    });
    let currentNextChar = 0;
    const cypher = secretBase64.split('').map(char => {
      const nextChar = nextChars[currentNextChar];
      const charCode = char.charCodeAt(0);
      const nextCharCode = nextChar.charCodeAt(0);
      currentNextChar = currentNextChar >= nextChars.length ? 0 : currentNextChar + 1;
      return String.fromCharCode(charCode ^ nextCharCode);
    });
    const cypherBase64 = btoa(cypher.join(''));
    return cypherBase64;
  }

  decrypt(password: string, encryptedSecret: string): string {
    this.megaKey = new MegaKey(password);
    const encryptedSecretChars = atob(encryptedSecret).split('');
    const keyChars = this.megaKey.md5Key.split('');
    let currentKey = 0;
    const nextChars = this.megaKey.md5Base64.split('').reverse().map(char => {
      const charCode = char.charCodeAt(0);
      const keyCode = keyChars[currentKey].charCodeAt(0);
      currentKey = currentKey >= keyChars.length ? 0 : currentKey + 1;
      return String.fromCharCode(charCode ^ keyCode);
    });
    let currentNextChar = 0;
    const secretBase64 = encryptedSecretChars.map(char => {
      const charCode = char.charCodeAt(0);
      const nexCharCode = nextChars[currentNextChar].charCodeAt(0);
      currentNextChar = currentNextChar >= nextChars.length ? 0 : currentNextChar + 1;
      return String.fromCharCode(charCode ^ nexCharCode);
    }).join('');

    return atob(secretBase64);
  }

  doDecrypt() {
    try {
      this.result = this.decrypt(this.password, this.secret);
    } catch (e) {
      alert('Probably wrong password!');
      console.error(e);
    }
  }
}
