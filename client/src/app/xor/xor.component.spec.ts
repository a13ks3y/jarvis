import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XorComponent } from './xor.component';

describe('XorComponent', () => {
  let component: XorComponent;
  let fixture: ComponentFixture<XorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has password field', () => {
    const passwordField = fixture.elementRef.nativeElement.querySelector('input[type=password]');
    expect(passwordField).toBeInstanceOf(HTMLInputElement);
  });
  it('should has encrypt and decrypt buttons', () => {
    const encryptButton = fixture.elementRef.nativeElement.querySelector('button.btn-encrypt');
    const decryptButton = fixture.elementRef.nativeElement.querySelector('button.btn-decrypt');
    expect(encryptButton).toBeInstanceOf(HTMLButtonElement);
    expect(decryptButton).toBeInstanceOf(HTMLButtonElement);
  });

  it('should encrypt, and decrypt secret message', () => {
    const password = 'Password';
    const secret = 'The secret message';
    const encryptedSecret = component.encrypt(password, secret);
    expect(encryptedSecret.length).toBeGreaterThan(0);

    const decryptedSecret = component.decrypt(password, encryptedSecret);
    expect(decryptedSecret).toEqual(secret);
  });

});
