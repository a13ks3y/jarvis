import { StripDashPipe } from './strip-dash.pipe';

describe('StripDashPipe', () => {
  it('strip dashes and replace it by spaces (by default)', () => {
    const pipe = new StripDashPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('Test-string-with-dashes')).toEqual('Test string with dashes');
  });
});
