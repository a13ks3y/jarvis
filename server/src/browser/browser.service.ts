import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import fs from 'fs';

@Injectable()
export class BrowserService {
    browserWSEndpoint: string;
    constructor() {
        const json = fs.readFileSync('./secret-config.json', 'utf-8');
        const secretConfig = JSON.parse(json);
        this.browserWSEndpoint = secretConfig.browserWSEndpoint;
    }
    async connect(url: string = 'about:blank'): Promise<puppeteer.Page> {
        const browser = await puppeteer.connect({
            browserWSEndpoint: this.browserWSEndpoint,
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
    
}
