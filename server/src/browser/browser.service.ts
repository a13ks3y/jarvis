import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import * as puppeteer from 'puppeteer-core';
import { promisify } from 'util';
const fs = require('fs');
const fkill = require('fkill');

@Injectable()
export class BrowserService {
    static browserWSEndpoint: string;
    constructor(private httpService: HttpService) {
        this.updateBrowserWSendpoint();
    }
    async updateBrowserWSendpoint(): Promise<void> {
        try {
            const response = await this.httpService.get<{webSocketDebuggerUrl: string}>('http://127.0.0.1:9222/json/version').toPromise();
            BrowserService.browserWSEndpoint = response.data.webSocketDebuggerUrl;  
            console.info('browserWSEndpoint updated:', BrowserService.browserWSEndpoint)  
        } catch (notKillError) {
            console.info('Trying to launch browser');
            this.launchBrowser(false);
            console.error(notKillError.message);
            try {
                console.info('Trying to RE-launch browser');
                this.launchBrowser(true);
            } catch (killError) {
                console.error(killError.message)
            }            
        }
    }
    async connect(url: string = 'about:blank'): Promise<puppeteer.Page> {
        if (!BrowserService.browserWSEndpoint) {
            await this.updateBrowserWSendpoint();
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
        const port = '9222';
        const chromePath = require('chrome-finder')();
        
        const chromeProcessName = process.platform === 'darwin' ? 'Google Chrome' : 'chrome';
        try {
            if (killChrome) await fkill(chromeProcessName);
        } finally {
            const args = [
                '--no-first-run',
                '--no-default-browser-check',
            ].join(' ');
            try {
                const cmd = `"${chromePath}" --remote-debugging-port=${port} ${args}`;
                await promisify(exec)(cmd);
                await this.updateBrowserWSendpoint();
            } catch (e) {
                console.log(e);
            }
        }
        
    }
    
}
