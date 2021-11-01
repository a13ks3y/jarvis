import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('should make first letter uppercase', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('lowercase')).toEqual('Lowercase');
  });
});
