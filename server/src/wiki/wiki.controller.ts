import { Controller, Get } from '@nestjs/common';
import * as puppeteer from 'puppeteer-core';
import { BrowserService } from './../browser/browser.service';

@Controller('wiki')
export class WikiController {
  constructor(private browserService: BrowserService) {}
  page: puppeteer.Page;
  interval: number = null;
  queue: string[] = [];
  // @todo: store visited links in DB
  visited: string[] = [];
  @Get('start')
  async start() {
    if (this.page) {
      return new Error('Already started!');
    }
    const url = 'https://en.wikipedia.org/wiki/Job_queue';
    this.page = await this.browserService.connect(url);
    this.queue.unshift(url);
    const scrollPage = async (nextUrl) => {
      await this.page.goto(nextUrl);
      this.visited.push(nextUrl);
      const seeAlsoLinks = (await this.page.evaluate(() => {
        const result = new Promise((resolve) => {
          const elements = Array.from(
            document.getElementsByClassName('mw-headline'),
          );
          (function recursion(element) {
            const seeAlsoElement = document.getElementById('See_also');
            setTimeout(() => {
              // @todo: consider use  html { scroll-behavior: smooth; } and window.scroll instead.
              element.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
              });
              if (elements.length) {
              } else {
                if (seeAlsoElement) {
                  const links = seeAlsoElement.querySelectorAll('ul > li > a');
                  const urls = Array.from(links).map((link) =>
                    link.getAttribute('href'),
                  );
                  console.log('URLS:', urls);
                  resolve(urls);
                } else {
                  resolve([]);
                }
              }
            }, 666 * 6);
          })(elements.shift());
        });
        return result;
      })) as string[];
      seeAlsoLinks.forEach((link) => {
        if (this.visited.indexOf(link) === -1) {
          this.queue.unshift(link);
        }
      });
      if (!this.queue.length) {
        this.queue.push('https://en.wikipedia.org/wiki/Special:Random');
      }
      setTimeout(() => {
        scrollPage(this.queue.shift());
      });
    };
    scrollPage(this.queue.shift()).then((r) => console.log('Scrolled:', r));
    return 200;
  }
  @Get('stop')
  async stop() {
    if (this.page) {
      await this.browserService.disconnect(this.page);
    }
  }
}
