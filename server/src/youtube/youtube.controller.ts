import { Controller, Get, Param } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import { BrowserService } from '../browser/browser.service';
    
@Controller('youtube')
export class YoutubeController {
    page: puppeteer.Page
    constructor(private browserService: BrowserService) {}
    @Get('start')
    async start() {
        const youtube = 'https://youtube.com';
        if (!this.page) {
            this.page = await this.browserService.connect(youtube);
        } else {
            this.page.goto(youtube);
        }
        await this.page.click('.ytd-thumbnail');
        // @todo: is it correct way to say that all is ok?
        return 200;
    }
    @Get('stop')
    async stop() {
        this.browserService.disconnect(this.page);
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
