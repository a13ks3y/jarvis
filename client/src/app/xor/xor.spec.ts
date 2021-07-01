import { Xor } from './xor';

describe('Xor', () => {
  it('should create an instance', () => {
    expect(new Xor()).toBeTruthy();
  });
  // @todo: at least two more unit-tests for different lengths
  it('xor(txt: string, key: string) should xor fucking string!', () => {
    // todo: more realistic text and key
    //asset
    const txt = 'The Secret Text Of The Secret Agent';
    const key = 'The Secret Key To The Secret Text;)';
    const expected = '000000000003101841163270116601369115546172317841163631178593';
    //act
    const actual = Xor.xor(txt, key);
    expect(actual).toEqual(expected); // Thank you, Captain Obvious
  })
});
