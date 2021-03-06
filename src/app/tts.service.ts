import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TTSService {
  get currentVoice() {
    return this._voices[this._currentVoiceIndex];
  }
  set currentVoiceIndex(value: number) {
    if (value >= this._voices.length || value < 0) {
      throw new RangeError(`Voice index should be not greater than ${this._voices.length} and not less than zero, ${value} is given.`);
    }
    this._currentVoiceIndex = value;
  }
  private _currentVoiceIndex: number = 0;
  get voices(): SpeechSynthesisVoice[] {
    if (!this._voices || !this._voices.length) {
      this.populateVoiceList();
    }
    return this._voices;
  }
  private _voices: SpeechSynthesisVoice[] = [];

  constructor() {
    speechSynthesis.getVoices();
    setTimeout(() => {
      speechSynthesis.getVoices();
      this.populateVoiceList();
    }, 666);
  }
  populateVoiceList() {
    this._voices = speechSynthesis.getVoices();
  }

  async say(phrase: string) {
    const promise = new Promise((resolve, reject) => {
      let synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(phrase);
      utterThis.onend = function (event) {
        // @todo free resources?
        resolve();
      }
      utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
        reject();
      }
      utterThis.voice = this._voices[this._currentVoiceIndex];

      utterThis.pitch = 0.999;
      utterThis.rate = 1;
      synth.speak(utterThis);
    });
  }

  tell(phrases: string[], interval:number = 666) {
    this.say(phrases.shift()).then(r => {
      setTimeout(() => {
        phrases.length && this.tell(phrases, interval)
      }, interval);
    })
  }
}
