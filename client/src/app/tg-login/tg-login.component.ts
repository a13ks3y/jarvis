import { Component, OnInit } from '@angular/core';
import {TgService} from '../tg.service';

@Component({
  selector: 'the-tg-login',
  templateUrl: './tg-login.component.html',
  styleUrls: ['./tg-login.component.less']
})
export class TgLoginComponent implements OnInit {
  loggedIn = false;
  password: string;
  phone: string;
  authStateType: string;
  extra: any;

  constructor(private tg: TgService) {
    this.tg.init().then(authState => {
      // @todo: make loggedIn getter, using this.authStateType instead of authState['@type']?
      this.loggedIn = authState['@type'] === 'authorizationStateReady';
      this.authStateType = authState['@type'];
      this.extra = authState['@extra'];
    }).catch(err => {
      // @todo: ???
      console.error(err);
    });
  }

  ngOnInit(): void {}

  login(): void {
    // @todo: login to telegram
    console.log(this.phone, this.password, this.extra);
    if (this.authStateType === 'authorizationStateWaitTdlibParameters'){
      // @todo: !Move this constants to the SECRET config! (why?)
      const API_ID = 12323282;
      // noinspection SpellCheckingInspection
      const API_HASH = '644f27c757b4e61f8ee9d6efbe5eb2f6';
      this.tg.sendQuery({
        '@type': 'setTdlibParameters',
        '@extra': this.extra,
        parameters: {
          database_directory: 'tdlib',
          use_message_database: true,
          use_secret_chats: false,
          api_id: API_ID,
          api_hash: API_HASH,
          system_language_code: 'en',
          device_model: 'Web',
          application_version: '0.0.1',
          enable_storage_optimizer: true,
          use_test_dc: false,
        }
      }).then(r => {
        console.log('result:', r);
        this.extra = r['@extra'];
      });
    }
  }
}
