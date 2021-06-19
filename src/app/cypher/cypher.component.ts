import {Component, OnInit} from '@angular/core';
import {Md5 as md5} from 'ts-md5';
import ENGLISH_WORDS from '../words_dictionary';

@Component({
  selector: 'the-cypher',
  templateUrl: './cypher.component.html',
  styleUrls: ['./cypher.component.less']
})
export class CypherComponent implements OnInit {

  words: any = ENGLISH_WORDS;
  wordsArray: string[] = [];
  encryptFlag = true;
  result = '';
  password: string;
  secret: string;

  constructor() {
    this.wordsArray = Object.keys(this.words);
  }

  ngOnInit(): void {
  }

  buttonClickHandler(): void {
    if (this.encryptFlag) {
      this.result = this.encrypt(this.password, this.secret);
    } else {
      this.result = this.decrypt(this.password, this.secret);
    }
  }

  getQuads(md5Hash: string): string[] {
    const passwordHashQuads = [];
    md5Hash.split('').forEach(char => {
      let byte = char.charCodeAt(0).toString(2);
      // Add leading zero if need
      if (byte.length < 8) {
        const missingZerosCount = 8 - byte.length;
        for (let i = 0; i < missingZerosCount; i++) {
          byte = '0' + byte;
        }
      }
      const firstQuad = byte.substr(0, 4);
      const secondQuad = byte.substr(4, 4);
      passwordHashQuads.push(firstQuad);
      passwordHashQuads.push(secondQuad);
    });
    return passwordHashQuads;
  }

  encrypt(password, secret): string {
    // todo: randomize wordsArray dictionary
    this.wordsArray = this.wordsArray.sort(() => Math.random() * -0.5);
    secret = secret.replace(/[\s]/g, 'space');
    secret = secret.toLowerCase();
    const passwordHash = md5.hashAsciiStr(password);
    const passwordHashQuads = this.getQuads(passwordHash);
    let quadIndex = 0;
    const cypherWords = secret.split('').map(char => {
      const quad = passwordHashQuads[quadIndex];
      const triple = quad.substr(1, 3);
      const reverseFlag = quad[0] === '1';
      const index = parseInt(triple, 2);
      quadIndex = quadIndex < 64 ? quadIndex + 1 : 0;
      return this.wordsArray.find((word) => word.charAt(reverseFlag ? -index : index) === char);
    });
    return cypherWords.join(' ');
  }

  decrypt(password: string, cypher: string): string {
    const passwordHash = md5.hashAsciiStr(password);
    const passwordHashQuads = this.getQuads(passwordHash);
    let quadIndex = 0;
    const secretChars = cypher.split(' ').map(word => {
      const quad = passwordHashQuads[quadIndex];
      const triple = quad.substr(1, 3);
      const index = parseInt(triple, 2);
      const reverseFlag = quad[0] === '1';
      quadIndex = quadIndex < 64 ? quadIndex + 1 : 0;
      return word.charAt(reverseFlag ? -index : index);
    });
    return secretChars.join('').replace(/space/g, ' ');
  }
}
