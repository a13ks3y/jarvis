import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CypherComponent } from './cypher.component';
import {Md5} from 'ts-md5';

describe('CypherComponent', () => {
  let component: CypherComponent;
  let fixture: ComponentFixture<CypherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CypherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CypherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has one text, and one password inputs', () => {
    const compiled = fixture.nativeElement;
    const textResult = compiled.querySelector('input[type=text]');
    const passwordResult = compiled.querySelector('input[type=password]');
    expect(textResult).toBeTruthy();
    expect(passwordResult).toBeTruthy();
    expect(textResult.getAttribute('placeholder')).toEqual('secret');
    expect(passwordResult.getAttribute('placeholder')).toEqual('password');
  });

  it('should has checkbox and button', () => {
    const compiled = fixture.nativeElement;
    const checkboxResult = compiled.querySelector('input[type=checkbox]');
    const buttonResult = compiled.querySelector('button');
    expect(checkboxResult).toBeTruthy();
    expect(buttonResult).toBeTruthy();
    expect(buttonResult.innerHTML).toEqual('Encrypt');
  });

  it('getQuads should return corresponding quads', () => {
    const hash = Md5.hashAsciiStr('test');
    console.log('hash of test is:', hash);
    const expectedResult = [
      '0011',
      '0000',
      '0011',
      '1001',
      '0011',
      '1000',
      '0110',
      '0110',
      '0011',
      '0110',
      '0110',
      '0010',
      '0110',
      '0011',
      '0110',
      '0100',
      '0011',
      '0100',
      '0011',
      '0110',
      '0011',
      '0010',
      '0011',
      '0001',
      '0110',
      '0100',
      '0011',
      '0011',
      '0011',
      '0111',
      '0011',
      '0011',
      '0110',
      '0011',
      '0110',
      '0001',
      '0110',
      '0100',
      '0110',
      '0101',
      '0011',
      '0100',
      '0110',
      '0101',
      '0011',
      '1000',
      '0011',
      '0011',
      '0011',
      '0010',
      '0011',
      '0110',
      '0011',
      '0010',
      '0011',
      '0111',
      '0110',
      '0010',
      '0011',
      '0100',
      '0110',
      '0110',
      '0011',
      '0110'
    ];
    const actualResult = component.getQuads(hash);
    expect(actualResult).toEqual(expectedResult);
  });

  it('should encrypt and decrypt', () => {
    const secret = 'The secret text';
    const password = 'Password';
    const cypher = component.encrypt(password, secret);
    const decryptedText = component.decrypt(password, cypher);
    expect(decryptedText).toEqual(secret.toLowerCase());
  });

});
