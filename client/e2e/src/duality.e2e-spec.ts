import {AppPage} from './app.po';
import {$, element, by} from 'protractor';

describe('duality cypher', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
  it('should display form fields', () => {
    page.navigateTo('/duality').then(() => {
      $('input[name=real-password]').then(input => {
        input.getAttribute('type').toBe('password');
      });
    });
  });
  it('buttons should be disabled, if at least one field is empty, and enable otherwise', () => {
    page.navigateTo('duality').then(() => {
      const encryptButton = element(by.css('button[name=encrypt-button]'));
      const decryptButton = element(by.css('button[name=decrypt-button]'));
      const realPasswordInput = element(by.css('input[name=real-password'));
      const fakePasswordInput = element(by.css('input[name=fake-password'));
      const realSecretInput = element(by.css('textarea[name=real-secret'));
      const fakeSecretInput = element(by.css('textarea[name=fake-secret'));
      const resultInput = element(by.css('textarea[name=result'));

      expect(encryptButton.getAttribute('disabled')).toBeTruthy();
      expect(decryptButton.getAttribute('disabled')).toBeTruthy();

      Promise.all([
        realPasswordInput.sendKeys('Test-Real-Password'),
        fakePasswordInput.sendKeys('Test-Fake-Password'),
        realSecretInput.sendKeys('Test REAL secret'),
        fakeSecretInput.sendKeys('Test FAKE secret')
      ]).then(() => {
        expect(encryptButton.getAttribute('disabled')).toBeFalsy();
        expect(decryptButton.getAttribute('disabled')).toBeFalsy();
      });
    });
  });
});
