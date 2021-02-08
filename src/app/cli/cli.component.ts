import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'the-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.less']
})
export class CliComponent implements OnInit {

  constructor(private http: HttpClient) { }
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
      // todo run command
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
            alert(restOfWords);
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
          } else {
            throw new Error('Not Implemented');
          }
        }
      } catch(e) {
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
