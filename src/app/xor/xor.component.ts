import { Component, OnInit } from '@angular/core';
import {Xor} from './xor';

@Component({
  selector: 'the-xor',
  templateUrl: './xor.component.html',
  styleUrls: ['./xor.component.less']
})
export class XorComponent implements OnInit {
  valueA = '';
  valueB = '';
  valueC = '';
  inDecryptMode = false;
  placeholderA = 'Text to encrypt';
  placeholderB = 'Secret key';
  placeholderC = 'Cypher';

  constructor() { }

  ngOnInit(): void {
  }

  encrypt(): void {
    this.valueC = Xor.xor(this.valueA, this.valueB);
  }
  decrypt(): void {
    this.valueA = Xor.xor(this.valueC, this.valueB);
  }

  somethingChanged($event: Event): void {
    if (this.valueB) {
      if (this.inDecryptMode) {
        if (this.valueA && this.valueA.length === this.valueB.length) {
          this.decrypt();
          }
      } else {
        if (this.valueA) {
          this.encrypt();
        }
      }
    }
  }

  inDecryptModeChecked(): void {
    if (this.inDecryptMode) {
      this.placeholderA = 'Text to encrypt';
      this.placeholderB = 'Secret key';
      this.placeholderC = 'Cypher';
    } else {
      this.placeholderA = 'Text to decrypt';
      this.placeholderB = 'Secret key';
      this.placeholderC = 'Result';
    }
  }
}
