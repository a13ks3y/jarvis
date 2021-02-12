import {Component, OnInit} from '@angular/core';
import {TTSService} from "./tts.service";
import {SttService} from "./stt.service";

@Component({
  selector: 'the-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {
  title = 'jarvis';
  rgb = { r: 0, g: 0, b: 0 }
  constructor(private tts: TTSService, private stt: SttService) {
  }
  ngOnInit() {
    // todo use requestAnimationFrame
    let isGoingUp = true;
    setInterval(() => {
      if (isGoingUp) {
        this.rgb.r = this.rgb.r < 256 ? this.rgb.r + 1 : this.rgb.r;
        this.rgb.g = this.rgb.r >= 128 && this.rgb.g < 256 ? this.rgb.g + 1 : this.rgb.g;
        this.rgb.b = this.rgb.g >= 128 && this.rgb.b < 256 ? this.rgb.b + 1 : this.rgb.b;
        if (this.rgb.b >= 255) isGoingUp = false;
      } else {
        this.rgb.r = this.rgb.r > 0 ? this.rgb.r - 1 : this.rgb.r;
        this.rgb.g = this.rgb.r <= 128 && this.rgb.g > 0 ? this.rgb.g - 1 : this.rgb.g;
        this.rgb.b = this.rgb.g <= 128 && this.rgb.b > 0 ? this.rgb.b - 1 : this.rgb.b;

        if (this.rgb.b <= 0) isGoingUp = true;

      }
      const { r, g, b } = this.rgb;
      document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;



    }, 66.6);

    if (localStorage.getItem('greeted') === 'true') {
      // todo clear 'greeted' localStorage key on next day!
    } else {
      let timeOfDay = 'night';
      const now = new Date();
      if (now.getHours() > 6 && now.getHours() <= 11) {
        timeOfDay = 'morning';
      } else if (now.getHours() > 11 && now.getHours() <= 22) {
        timeOfDay = 'day';
      }
      this.tts.say(`Good ${timeOfDay}, Sir!`);
      localStorage.setItem('greeted', 'true');
    }
  }

  private _listening: boolean;

  startListen() {
    // @todo: use random phrase (move dict and helpers from cli component to service)
    document.body.style.backgroundColor = 'black';
    this.tts.say(`I'm listening`).then(r => {
      this._listening = true;
      document.body.style.backgroundColor = 'green';
      this.stt.start();
      setTimeout(() => {
        // @todo: use random phrase (move dict and helpers from cli component to service)
        this.tts.say('Could not hear well from you.');
        this.stopListen();
      }, 6666 * 3); // ~ 6 minutes
    });
  }

  stopListen() {
    this._listening = false;
    document.body.style.backgroundColor = 'black';
    this.stt.stop();
  }

  wrapperTouchStart($event: TouchEvent) {
  }

  wrapperTouchEnd($event: TouchEvent) {
    if (!this._listening) this.startListen();
  }
}
