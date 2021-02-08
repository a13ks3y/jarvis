import { Component, OnInit } from '@angular/core';
import {Xor} from "./xor";

@Component({
  selector: 'the-xor',
  templateUrl: './xor.component.html',
  styleUrls: ['./xor.component.less']
})
export class XorComponent implements OnInit {

  constructor() { }

  txt: string
  key: string;
  cypher: string
  inDecryptMode: boolean = false

  ngOnInit(): void {
  }

  encrypt() {
    this.cypher = Xor.xor(this.txt, this.key);
  }
  decrypt() {
    this.txt = Xor.xor(this.cypher, this.key);
  }

  somethingChanged($event: Event) {
    if (this.key) {
      if (this.inDecryptMode) {
        if (this.cypher && this.cypher.length === this.key.length) {
          this.decrypt();
          }
      } else {
        if (this.txt) {
          this.encrypt();
        }
      }
    }
  }
}
