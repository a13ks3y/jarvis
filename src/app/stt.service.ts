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
    this.grammar = `#JSGF V1.0; grammar colors; public <color> = ${this.colors.join(' | ')} ;`;
    this.recognition = new SttService.SpeechRecognition();
    this.speechRecognitionList = new SttService.SpeechGrammarList();
    // probably this is the reason why chorme tell about "without user interaction" shit @todo: check it
    this.speechRecognitionList.addFromString(this.grammar);
  }

  start() {
    this.recognition.addEventListener('result', ($event) => {
      // $event.results is Array like object (SpeechRecognitionResultList)
      const firstResult = $event.results[0];
      const firstAlternative = firstResult[0];
      const firstTranscript = firstAlternative.transcript.toLowerCase().trim();
      console.log('Something recognized!', firstAlternative.transcript, 'Confidence:', firstAlternative.confidence);
      switch (firstTranscript) {
        case 'green': document.body.style.color = 'green'; break;
        case 'red': document.body.style.color = 'red'; break;
        case 'blue': document.body.style.color = 'blue'; break;
        case 'yellow': document.body.style.color = '#f90'; break;
        default:
            console.error('unknown command!');
          break;
      }
    });
    this.recognition.start();
  }
  stop() {
    this.recognition.stop();
  }
}
