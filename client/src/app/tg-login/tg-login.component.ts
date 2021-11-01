import { Component, OnInit } from '@angular/core';
import {TgService} from "../tg.service";

@Component({
  selector: 'the-tg-login',
  templateUrl: './tg-login.component.html',
  styleUrls: ['./tg-login.component.less']
})
export class TgLoginComponent implements OnInit {
  loggedIn = false;
  password: string;
  phone: string;

  constructor(private tg: TgService) {
    this.tg.init().then(authState => this.loggedIn = authState['@type'] === 'authorizationStateReady');
  }

  ngOnInit(): void {}

  login(): void {
    // @todo: login to telegram
    console.log(this.phone, this.password);
  }
}
