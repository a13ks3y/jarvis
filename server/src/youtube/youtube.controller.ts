import { Controller, Get, Param } from '@nestjs/common';
// @todo: figure out why the "import" statement isn't working.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const findChrome = require('chrome-finder');
const chromePath = findChrome();
// @todo: move all puppeteer related stuff to service (in other module?)
import * as puppeteer from 'puppeteer-core';
const fs = require('fs');

@Controller('youtube')
export class YoutubeController {
    browser: puppeteer.Browser
    page: puppeteer.Page
    // @todo: introduce SecretConfig interface (or/and json schema?)
    secretConfig: { browserWSEndpoint: string }
    constructor() {
        // @todo: move to annotation/decorator/mixin/parent class
        const json = fs.readFileSync('./secret-config.json', 'utf-8');
        this.secretConfig = JSON.parse(json);
    }
    @Get('start')
    async start() {
        console.time('Starting');
        if (this.browser || this.page) {
            return new Error('Already started!');
        }
        // @todo: get screen resolution from OS (how???)
        const width = 1960;
        const height = 1080;
        const viewPort = {
            width: width,
            height: height
        };
        // @todo: move config to config
        this.browser = await puppeteer.connect({
            browserWSEndpoint: this.secretConfig.browserWSEndpoint,
            defaultViewport: null
        });
        /*
        this.browser = await puppeteer.launch(
            {
                headless: false,
                executablePath: chromePath,
                ignoreDefaultArgs: false,                
                userDataDir: 'C:\\Users\\06670\\AppData\\Local\\Google\\Chrome\\User Data',
                defaultViewport: null,
                args: [
                    '--start-maximized',
                    '--disable-gpu'
                ]
            }
        );
            //*/

        this.page = await this.browser.newPage();        
        await this.page.goto('https://youtube.com');
        await this.page.click('.ytd-thumbnail');

        console.timeEnd('Starting');
        return 200;
    }
    @Get('stop')
    async stop() {
        this.page && await this.page.close();
        this.browser && await this.browser.disconnect();
        // No need to close browser, if it wasn't opened.
        // this.browser && this.browser.close(); 
        this.page = null;
        this.browser = null;       
        return 200;
    }
    @Get('pause')
    async pause() {
        this.page && await this.page.click('.ytp-play-button');
        return 200;
    }
    @Get('play')
    async play() {
        this.page && await this.page.click('.ytp-play-button');
        return 200;
    }
    @Get('next')
    async next() {
        this.page && await this.page.click('.ytp-next-button');
        return 200;
    }
    @Get('prev')
    async prev() {
        this.page && await this.page.goBack();
        return 200;
    }
    @Get('toggleFullscreen')
    async toggleFullscreen() {
        this.page && await this.page.click('.ytp-fullscreen-button');
        return 200;
    }
    
}
