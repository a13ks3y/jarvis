import { Injectable } from '@angular/core';

//const SpeechRecognition = window['SpeechRecognition'] || window['webkitSpeechRecognition'];
//const SpeechGrammarList = window['SpeechGrammarList'] || window['webkitSpeechGrammarList'];
//const SpeechRecognitionEvent =window[' SpeechRecognitionEvent'] || window['webkitSpeechRecognitionEvent'];

@Injectable({
  providedIn: 'root'
})
export class SttService {
  colors: string[] = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ];
  grammar: string
  recognition: SpeechRecognition
  private speechRecognitionList: SpeechGrammarList;

  constructor() {
    // I'm fucking LOVE this IDE
    this.grammar = `#JSGF V1.0; grammar colors; public <color> = ${this.colors.join(' | ')} ;`;
    this.recognition = new SpeechRecognition();
    this.speechRecognitionList = new SpeechGrammarList();
    this.speechRecognitionList.addFromString(this.grammar);
  }

  start() {
    this.recognition.start();

  }
  stop() {
    this.recognition.stop();
  }
}
