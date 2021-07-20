import { Controller, Get, Param } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import { BrowserService } from '../browser/browser.service';
    
@Controller('youtube')
export class YoutubeController {
    page: puppeteer.Page = null;
    paused = false;
    constructor(private browserService: BrowserService) {}
    @Get('start')
    async start() {
        const youtube = 'https://youtube.com';
        if (!this.page) {
            this.page = await this.browserService.connect(youtube);
        } else {
            await this.page.goto(youtube);
        }
        await this.page.click('.ytd-thumbnail');
    }
    @Get('stop')
    async stop() {
       if (this.page) await this.browserService.disconnect(this.page);
    }
    @Get('pause')
    async pause() {
        if (this.page) {
            if (!this.paused) {
                await this.page.click('.ytp-play-button');
                this.paused = true;
            }
        }
    }
    @Get('play')
    async play() {
        if (this.page) {
            if (!this.paused) {
                await this.page.click('.ytp-play-button');
                this.paused = false;
                return true;
            }    
        }
        return false;
    }
    @Get('next')
    async next() {
        if (this.page) await this.page.click('.ytp-next-button');
        
    }
    @Get('prev')
    async prev() {
        if (this.page) await this.page.goBack();
        
    }
    @Get('toggleFullscreen')
    async toggleFullscreen() {
        if (this.page) await this.page.click('.ytp-fullscreen-button');
       
    }
    
}
