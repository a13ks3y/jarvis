import { Duality } from './duality';
/*
*   1. It should crypt TWO messages with two passwords,
*       one is set by user, the other generated (or set by user?),
*       so the decryption is worked as described below:
*   2. It should decrypt cypher, with first password - first message,
*      with second password - other message.
*   3. Should be hard/impossible to crack without password
*   4. If both secret text and cypher are known,
*       original password(s) should be impossible to recover.
* */

const SECRET_MESSAGE = 'This is the secret message, which contains very important numbers, such as: 27, 42, 666, 13 and others.';
const FAKE_SECRET_MESSAGE = 'This is the FAKE secret message. It has at least the same (or longer) length as the real secret message, but DOES NOT contains any numbers or secrets at all.';
const REAL_PASSWORD = 'NotReallyStrongPassword';
describe('Duality', () => {
  let cypher: Duality;
  let decryptedSecret;
  let decryptedFakeSecret;
  beforeEach(() => {
    cypher = Duality.encrypt(SECRET_MESSAGE, FAKE_SECRET_MESSAGE, REAL_PASSWORD);
    decryptedSecret = Duality.decrypt(cypher.cypher, REAL_PASSWORD);
    decryptedFakeSecret = Duality.decrypt(cypher.cypher, cypher.fakePassword);
  });
  it('cypher should be instance of Duality', () => {
    expect(cypher).toBeInstanceOf(Duality);
  });

  it('cypher and fakePassword fields should not be empty', () => {
    expect(cypher.cypher.length).toBeGreaterThan(0);
    expect(cypher.fakePassword.length).toBeGreaterThan(0);
  });

  it('real secret should be decrypted using real password', () => {
    expect(decryptedSecret).toEqual(SECRET_MESSAGE);
  });
  it('fake secret should be decrypted using fake password', () => {
    expect(decryptedFakeSecret).toEqual(FAKE_SECRET_MESSAGE);
  });
});
