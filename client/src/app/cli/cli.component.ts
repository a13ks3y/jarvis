import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TTSService} from "../tts.service";



@Component({
  selector: 'the-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.less']
})
export class CliComponent implements OnInit {

  constructor(private http: HttpClient, private tts: TTSService) { }
  @Input()
  collapsed: boolean
  input: string;
  output: string[] = [];
  // @todo move it to separate static class or constants or JSON etc.
  basicDictionary: any = {
    doNotKnowHowToDoIt: [
      'Unfortunately, I don\'t know how to do it (yet).',
      'I\'m sorry, Dave. I\'m afraid I can\'t do that.',
      'Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave.'
    ],
    youEntered: [
      'You entered:',
      'Can not perform:',
      'Command not found:'
      ],
    doYouLikeIt: [
      // This is just stupid, I need more advance way to script Jarvis answers...
      // Some kind of script language, like Java, but wait... oh shit...
      'Do you like it?',
      'How do I look?',
    ]
  }


  ngOnInit(): void {
    // todo clear event listener on destroy
    document.body.addEventListener('keypress', this.cliKeyPress.bind(this));
  }



  randomPhrase(dict: string[]): string {
    return dict[~~(Math.random() * dict.length)];
  };

  onCommandChar($event) {
    if (this.input && this.input.length) {
      // todo refactor this shit!
      const itIsAQuestion = this.input.split('').find(char => char === '?');
      try {
        if (itIsAQuestion) {
          throw new Error('Not Implemented');
        } else {
          const words = this.input.trim().toLowerCase().split(' ');
          // @todo: UINIT TEST IT!!!!1111oneoneoneone
          const restOfWords =words.slice(1).join(' ');
          const [firstWord, secondWord] = words;
          if (firstWord === 'go' || firstWord === 'goto') {
            location.href = '/' + secondWord;
          } else if (firstWord.includes('say')) {
            // todo use text to speech if it's possible, show pop-up if it's not.
            this.tts.say(restOfWords);
          } else if (firstWord.includes('google')) {
            const url = `https://www.google.com/search?q=${restOfWords}&oq=${restOfWords}&ie=UTF-8`;
            const win = window.open(url, '_blank');
            win.focus();
          } else if (firstWord.includes('run')) {
            this.http.get('/run?cmd=' + restOfWords, {
            }).subscribe((response:{result: string}) => {
              const value: string = response.result;
              if (value && value.length) {
                value.split('\n').forEach(str => this.output.push(str));
              } else {
                this.output.push(`Command ${restOfWords} executed.`);
              }
              this.input = '';
            });
          } else if (firstWord === 'show' && secondWord === 'voices') {
            this.tts.voices
              .map((voice, index) => { return { index: index, lang: voice.lang, name: voice.name}})
              .filter(voice => voice.lang.includes('en') || voice.lang.includes('ru') )
              .forEach((voice, index) => {
                this.output.push(`${voice.index} ${voice.name}`);
              });
          } else if (firstWord === 'use' && secondWord === 'voice') {
            const voiceIndex = parseInt(restOfWords[0]);
            this.tts.currentVoiceIndex = voiceIndex;
            const currentVoice = this.tts.currentVoice || { name: 'UNKNOWN SHIT'};
            this.output.push(`Current voice is set to ${currentVoice.name}`);
            this.tts.tell([
              `Current voice is set to ${currentVoice.name}`,
               this.randomPhrase(this.basicDictionary.doYouLikeIt)
            ], 333);
          } else {
            throw new Error('Not Implemented');
          }
        }
      } catch(e) {
        console.error(e);
        this.output.push(`${this.randomPhrase(this.basicDictionary.youEntered)} "${this.input}"`);
        this.output.push(this.randomPhrase(this.basicDictionary.doNotKnowHowToDoIt));
      }
      this.input = '';
    }
  }

  toggleCli() {
    this.collapsed = !this.collapsed;
    if (!this.collapsed) {
      setTimeout(() => {
        const inputEl = document.getElementById('input');
        inputEl.focus();
      }, 666);
    }
  }

  cliKeyPress($event: KeyboardEvent) {
    if ($event.key === '`') {
      this.toggleCli();
      if (this.collapsed) {
        this.input = '';
        this.output = []; // todo archive it somewhere for history?
      }
      $event.preventDefault();
      return false;
    }
  }
}
