export class Xor {
  static xor(txt: string, key: string):string {
    // @todo: repeat key if it shorter, or cut if it longer than txt (should be default behaviour IMHO
    if (txt.length !== key.length) throw new RangeError('txt and key should be equal');
    // @ todo: rewrite this to not look like you was high as an Empire State Building !!!
    return (txt.split('').map((char, index) => char.charCodeAt(0) ^ key.charCodeAt(index)).join(''));
  }
}
