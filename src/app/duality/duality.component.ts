import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-duality',
  templateUrl: './duality.component.html',
  styleUrls: ['./duality.component.less']
})
export class DualityComponent implements OnInit {
  realPassword: string;
  fakePassword: string;
  realSecret: string;
  fakeSecret: string;
  result: string;

  constructor() { }

  ngOnInit(): void {
  }

  isValid(): boolean {
    return Boolean(this.realPassword && this.realPassword.length &&
      this.fakePassword && this.fakePassword.length &&
      this.realSecret && this.realSecret.length &&
      this.fakeSecret && this.fakeSecret.length);
  }

}