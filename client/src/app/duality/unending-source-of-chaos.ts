import {Md5} from 'ts-md5';

export class UnendingSourceOfChaos implements Iterator<number>{
  acc: number[] = [];
  seed: string;
  history: string[];
  counter = 0;
  constructor(seed: string) {
    this.seed = /^[a-f0-9]{32}$/gm.test(seed) ? seed : Md5.hashStr(seed);
    this.history = [this.seed];
  }

  next(...args: [] | [undefined]): IteratorResult<number, any> {
    const seed = this.history[this.history.length - 1];
    const a = this.counter;
    const b = this.counter * 2;
    const hex = seed[a] + seed[b];

    this.counter ++;
    if (this.counter >= 0xf) {
      this.counter = 0;
      this.history.push(Md5.hashStr(seed));
    }
    return { done: false, value: parseInt(hex, 16)};
  }
}
