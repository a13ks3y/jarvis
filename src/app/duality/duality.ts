export class Duality {
  readonly cypher: string;
  readonly fakePassword: string;
  constructor(cypher, fakePassword) {
    this.cypher = cypher;
    this.fakePassword = fakePassword;
  }

  static encrypt(secret: string, fakeSecret: string, password: string): Duality {
    return new Duality('', '');
  }

  static decrypt(cypher: string, REAL_PASSWORD: string): string {
    return 'Not implemented yet :(';
  }
}
