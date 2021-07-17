import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import { exec } from 'child_process';
const fs = require('fs');
const fkill = require('fkill');

@Injectable()
export class BrowserService {
    static browserWSEndpoint: string;
    constructor() {
        try {
            // @todo: move reading from secret-config to separate file. pass as arguments, or inject
            const json = fs.readFileSync('./secret-config.json', 'utf-8');
            const secretConfig = JSON.parse(json);
            BrowserService.browserWSEndpoint = secretConfig.browserWSEndpoint;    
        } catch (e) {
            if (e.code === 'ENOENT') {
                console.warn('No secret-config file!');
            }
        }
    }
    async connect(url: string = 'about:blank'): Promise<puppeteer.Page> {
        try {
            // @todo: make it more gracefully?
            await this.lanchBrowser();
        } catch (e) {
            console.error('Launching browser error:', e);
        }
        const browser = await puppeteer.connect({
            browserWSEndpoint: BrowserService.browserWSEndpoint,
            defaultViewport: null,            
        });
        const page = await browser.newPage();
        await page.goto(url);
        page.browser()
        return page; 
    }
    async disconnect(page: puppeteer.Page): Promise<void> {
        const browser = await page.browser();
        await browser.disconnect();        
    }
    async lanchBrowser(): Promise<void> {
        if (BrowserService.browserWSEndpoint) {
            return Promise.resolve();
        }
        const result = new Promise<void>((resolve, reject) => {
            const port = '9222';
            const chromePath = require('chrome-finder')();
            console.log('Chrome path is:', chromePath);
            fkill('chrome').then(() => {
                // @todo: cross-platform?
                const args = [
                    '--no-first-run',
                    '--no-default-browser-check',
                    '--allow-file-access-from-file',
                    '--disable-web-security'
                ].join(' ');
                const cmd = `"${chromePath}" --remote-debugging-port=${port} ${args}`;
                console.log('cmd:', cmd);
                exec(cmd, (err, result) => {
                    console.log('PIPKA!', err, result);
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });            
            });
        });
        return result;
    }
    
}
