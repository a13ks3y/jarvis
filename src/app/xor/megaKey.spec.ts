import {MegaKey} from "./megaKey";

describe('MegaKey', () => {
  let megaKey: MegaKey;
  beforeEach(() => {
    megaKey = new MegaKey('Week password');
  });
  it('should fill md5 field', () => {
    expect(megaKey.md5).toEqual('be4c21bf90fd57f30ee9368dd4268007');
  });
  it('should fill base64 field', () => {
    expect(megaKey.base64).toEqual('V2VlayBwYXNzd29yZA==');
  });
  it('should fill md5Base64 field', () => {
    expect(megaKey.md5Base64).toEqual('cbe0f72ba7a20febfc6528365c1544ea');
  });
  it('should fill key field', () => {
    expect(megaKey.key).toEqual('be4c21bf90fd57f30ee9368dd4268007-^_^-cbe0f72ba7a20febfc6528365c1544ea');
  });
  it('should fill md5Key field', () => {
    expect(megaKey.md5Key).toEqual('3d3367a5e71536565b71c3237362982f');
  });
});
