import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SttService {
  static SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
  static SpeechGrammarList = window['SpeechGrammarList'] || window['webkitSpeechGrammarList'];
  static SpeechRecognitionEvent =window[' SpeechRecognitionEvent'] || window['webkitSpeechRecognitionEvent'];
  colors: string[] = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
  grammar: string
  recognition: SpeechRecognition
  private speechRecognitionList: SpeechGrammarList;

  constructor() {
    // I'm fucking LOVE this IDE
    this.grammar = `#JSGF V1.0; grammar colors; public <color> = ${this.colors.join(' | ')} ;`;
    this.recognition = new SttService.SpeechRecognition();
    this.speechRecognitionList = new SttService.SpeechGrammarList();
    this.speechRecognitionList.addFromString(this.grammar);
  }

  start() {
    this.recognition.start();

  }
  stop() {
    this.recognition.stop();
  }
}
