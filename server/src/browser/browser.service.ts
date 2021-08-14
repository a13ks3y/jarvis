import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as puppeteer from 'puppeteer-core';
import { promisify } from 'util';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fkill = require('fkill');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chromePath = require('chrome-finder')();

const DEBUGGER_PORT = '9222';

@Injectable()
export class BrowserService {
  static browserWSEndpoint: string;
  constructor(private httpService: HttpService) {}
  async updateBrowserWebSocketEndpoint(): Promise<boolean> {
    try {
      const response = await this.httpService
        .get<{ webSocketDebuggerUrl: string }>(
          `http://127.0.0.1:${DEBUGGER_PORT}/json/version`,
        )
        .toPromise();
      BrowserService.browserWSEndpoint = response.data.webSocketDebuggerUrl;
      console.info(
        'browserWSEndpoint updated:',
        BrowserService.browserWSEndpoint,
      );
      return true;
    } catch (e) {
      console.info(
        'Can not connect, probably browser is not launched!',
        e.message,
      );
      return false;
    }
  }
  async connect(url = 'about:blank'): Promise<puppeteer.Page> {
    if (!BrowserService.browserWSEndpoint) {
      const endpointUpdated = await this.updateBrowserWebSocketEndpoint();
      if (!endpointUpdated) {
        const browserIsLaunched = await this.launchBrowser(false);
        const endpointUpdatedAfterLaunch =
          await this.updateBrowserWebSocketEndpoint();
        if (browserIsLaunched && endpointUpdatedAfterLaunch) {
        } else {
          console.info('Can not Launch browser, trying to Re-Launch:');
          const browserIsReLaunched = await this.launchBrowser(true);
          const endpointUpdatedAfterReLaunch =
            await this.updateBrowserWebSocketEndpoint();
          if (browserIsReLaunched && endpointUpdatedAfterReLaunch) {
            if (!(await this.updateBrowserWebSocketEndpoint()))
              throw new Error('Can not re-launch browser!');
          } else {
            throw new Error('Can not re-launch browser!');
          }
        }
      }
    }
    const browser = await puppeteer.connect({
      browserWSEndpoint: BrowserService.browserWSEndpoint,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(url);

    return page;
  }
  async disconnect(page: puppeteer.Page): Promise<void> {
    const browser = await page.browser();
    await browser.disconnect();
  }
  private async launchBrowser(killChrome: boolean): Promise<boolean> {
    if (BrowserService.browserWSEndpoint) {
      return true;
    }

    const chromeProcessName =
      process.platform === 'darwin' ? 'Google Chrome' : 'chrome';
    try {
      if (killChrome) await fkill(chromeProcessName);
    } catch (e) {
      console.error('Killing chrome error', e);
    }

    const args = ['--no-first-run', '--no-default-browser-check'].join(' ');
    try {
      const cmd = `"${chromePath}" --remote-debugging-port=${DEBUGGER_PORT} ${args}`;
      const result = await promisify(exec)(cmd);
      console.info('Execute command:', cmd, result);
      return true;
    } catch (e) {
      console.error('Launch browser error:', e);
      return false;
    }
  }
}
