import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(relativePath: string = ''): Promise<unknown> {
    if (relativePath.length > 1 && relativePath[0] !== '/') {
      relativePath = '/' + relativePath;
    }
    return browser.get(browser.baseUrl + relativePath) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('.cli-toggle')).getText() as Promise<string>;
  }
}
