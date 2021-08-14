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
  async updateBrowserWebSocketEndpoint(): Promise<void> {
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
    } catch (notKillError) {
      console.info('Trying to launch browser');
      console.error(notKillError.message);
      await this.launchBrowser(false);
      try {
        console.info('Trying to RE-launch browser');
        await this.launchBrowser(true);
      } catch (killError) {
        console.error(killError.message);
      }
    }
  }
  async connect(url = 'about:blank'): Promise<puppeteer.Page> {
    if (!BrowserService.browserWSEndpoint) {
      await this.updateBrowserWebSocketEndpoint();
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
  async launchBrowser(killChrome: boolean): Promise<void> {
    if (BrowserService.browserWSEndpoint) {
      return Promise.resolve();
    }

    const chromeProcessName =
      process.platform === 'darwin' ? 'Google Chrome' : 'chrome';
    try {
      if (killChrome) await fkill(chromeProcessName);
    } finally {
      const args = ['--no-first-run', '--no-default-browser-check'].join(' ');
      try {
        const cmd = `"${chromePath}" --remote-debugging-port=${DEBUGGER_PORT} ${args}`;
        await promisify(exec)(cmd);
        await this.updateBrowserWebSocketEndpoint();
      } catch (e) {
        console.log('Launch browser error:', e);
      }
    }
  }
}
