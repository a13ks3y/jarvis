import {Md5} from "ts-md5";

// @todo: move it to some config? (which one?)
const GLOBAL_SALT = '-^_^-'; // The secret global salt.

export class MegaKey {
    readonly base64: string;
    readonly md5: string;
    readonly md5Base64: string;
    readonly key: string;
    readonly md5Key: string;

    constructor (password: string) {
        this.base64 = btoa(password);
        this.md5 = Md5.hashStr(password);
        this.md5Base64 = Md5.hashStr(this.base64);
        this.key = `${this.md5}${GLOBAL_SALT}${this.md5Base64}`;
        this.md5Key = Md5.hashStr(this.key);
    }
}
