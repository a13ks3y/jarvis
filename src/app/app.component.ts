import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'the-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit  {
  title = 'jarvis';
  rgb = { r: 0, g: 0, b: 0 }
  private voices: SpeechSynthesisVoice[];
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

    this.populateVoiceList();
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
      this.say(`Good ${timeOfDay}, Sir!`);
      localStorage.setItem('greeted', 'true');
    }
  }
   populateVoiceList() {
     this.voices = speechSynthesis.getVoices();
     console.log('voices:', this.voices);
  }
  say(phrase: string) {
    let synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(phrase);
    utterThis.onend = function (event) {
      // @todo free resources?
    }
    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }
    utterThis.voice = this.voices[11];

    utterThis.pitch = 0.999;
    utterThis.rate = 1;
    synth.speak(utterThis);

  }
}
