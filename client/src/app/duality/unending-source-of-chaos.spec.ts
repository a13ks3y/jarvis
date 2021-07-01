import { UnendingSourceOfChaos } from './unending-source-of-chaos';

describe('UnendingSourceOfChaos', () => {
  it('should create an instance', () => {
    const src = new UnendingSourceOfChaos('Any string, usually password-hash');
    expect(src).toBeTruthy();
    expect(src.seed).toEqual('835acb0964e8fdf8961906da4d62398b');
    expect(src.history[0]).toEqual('835acb0964e8fdf8961906da4d62398b');
  });
  it('should create an instance with same hash, if md5 hash is passed:', () => {
    const src = new UnendingSourceOfChaos('835acb0964e8fdf8961906da4d62398b');
    expect(src.seed).toEqual('835acb0964e8fdf8961906da4d62398b');
    expect(src.history[0]).toEqual('835acb0964e8fdf8961906da4d62398b');
  });
  it('should return 1 byte for each "next" iteration', () => {
    const src = new UnendingSourceOfChaos('835acb0964e8fdf8961906da4d62398b');
    expect(src.next().value).toEqual(136);
    expect(src.next().value).toEqual(53);
    expect(src.next().value).toEqual(92);
    Array(16).fill(0).forEach(() => src.next());
    expect(src.history.length).toEqual(2);
  });

});
