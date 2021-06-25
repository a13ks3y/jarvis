const findChrome = require('chrome-finder');
const chromePath = findChrome();
const puppeteer = require('puppeteer-core');
let browser;
const wikiPages = `
https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D1%80#%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_(%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4)
https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%93%D0%B8%D0%B4%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D0%B2%D0%BE%D0%B4
https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%80%D0%BE%D1%82%D0%BD%D0%BE-%D0%B8%D0%BC%D0%BF%D1%83%D0%BB%D1%8C%D1%81%D0%BD%D0%B0%D1%8F_%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%B9_%D1%80%D0%B0%D0%B7%D1%80%D1%8F%D0%B4
https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B4%D1%83%D0%B3%D0%B0
https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B7%D1%80%D1%8F%D0%B4
https://ru.wikipedia.org/wiki/%D0%A2%D0%BB%D0%B5%D1%8E%D1%89%D0%B8%D0%B9_%D1%80%D0%B0%D0%B7%D1%80%D1%8F%D0%B4
https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%87%D0%BA%D0%B0#%D0%A1%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5,_%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2_%D0%B8_%D0%B8%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5
https://ru.wikipedia.org/wiki/%D0%A5%D0%BB%D0%BE%D1%80%D0%B0%D1%82_%D0%BA%D0%B0%D0%BB%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D1%85%D0%BB%D0%BE%D1%80%D0%B0%D1%82_%D0%BA%D0%B0%D0%BB%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BB%D1%8C%D1%84%D0%B0%D1%82_%D0%B0%D0%BC%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%A5%D0%BB%D0%BE%D1%80%D0%B0%D1%82_%D0%B0%D0%BC%D0%BC%D0%BE%D0%BD%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BE%D0%BA%D1%81%D0%B8%D0%B4_%D1%85%D0%BB%D0%BE%D1%80%D0%B0
https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D1%83%D1%80%D0%B8%D0%BA
https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BB%D0%B5%D0%B9
https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B0
https://ru.wikipedia.org/wiki/%D0%A0%D0%9F%D0%93-7
https://ru.wikipedia.org/wiki/%D0%90%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D1%82%D0%B8%D0%BA%D0%B0
https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%B7%D0%B2%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B9_%D0%B4%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%B5%D0%BB%D1%8C
https://ru.wikipedia.org/wiki/%D0%AD%D1%84%D1%84%D0%B5%D0%BA%D1%82_%D0%92%D0%B8%D0%BB%D0%BB%D0%B0%D1%80%D0%B8
https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B5%D1%82%D1%8B
https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D1%80%D0%B8%D0%BA%D1%86%D0%B8%D1%8F
https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%9F%D0%B8%D1%80%D1%81%D0%B0
https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%84%D0%B8%D0%BB%D1%8F%D1%80%D0%BD%D0%B0%D1%8F_%D0%BA%D0%B0%D1%82%D1%83%D1%88%D0%BA%D0%B0
https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D1%80_%D0%A2%D0%B5%D1%81%D0%BB%D1%8B
https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BD%D0%B0%D0%BD%D1%81%D0%BD%D1%8B%D0%B9_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D1%80
https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%9A%D0%BE%D0%BA%D1%80%D0%BE%D1%84%D1%82%D0%B0_%E2%80%94_%D0%A3%D0%BE%D0%BB%D1%82%D0%BE%D0%BD%D0%B0
https://ru.wikipedia.org/wiki/%D0%A5%D0%BB%D0%BE%D1%80%D0%B5%D0%BB%D0%BB%D0%B0
https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81_%D0%A4%D0%B8%D1%88%D0%B5%D1%80%D0%B0_%E2%80%94_%D0%A2%D1%80%D0%BE%D0%BF%D1%88%D0%B0
https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D1%82%D1%87%D0%B8%D0%BA_%D1%83%D0%B3%D0%BB%D0%B0_%D0%BF%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0
https://ru.wikipedia.org/wiki/%D0%92%D1%80%D0%B0%D1%89%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%D1%81%D1%8F_%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D1%80
https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD
https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%BE%D0%BD_%D0%90%D0%BC%D0%BF%D0%B5%D1%80%D0%B0
https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D0%B3%D0%B8%D0%B4%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80https://ru.wikipedia.org/wiki/LVDT
https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B5%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D1%81%D0%B8%D0%BD
`.split('\n').filter(s => s && s.length > 6.66).sort((a,b) => Math.floor(Math.random() * 2) - 1);
function waterfall (tasks){
    function recurtion(resolve) {
        if (tasks.length === 0) {
            return resolve();
        }
        const task = tasks.pop();
        return task().then(() => {
            recurtion(resolve);
        }).catch((e) => {
            console.error(e);
        });
    }
    return new Promise((resolve) => recurtion(resolve));    
}
function repeat(str, count) {
    let arr = [];
    for (let i = 0; i<count; i++) {
        arr.push(str);
    }
    return arr;
}
async function main() {
    browser = await puppeteer.launch({
        executablePath: chromePath,
        headless: false,
        defaultViewport: {
            width: 1024,
            height: 768
        }
    });
    let page = await browser.newPage();


    async function quickLook(url) {     
        console.log('goto:', url);   
        await page.goto(url);
        
        return waterfall([
            repeat('wait', 7),
            repeat('scroll', 13),
            repeat('scrollUp', 9)
        ].flat().sort((a, b) => Math.floor(Math.random() * 2) - 1).map(command => {
            console.log('evaluate command:', command);
            switch(command) {
                case 'wait': return () => page.waitForTimeout(666 * 2); break;
                case 'scroll': return () => page.evaluate(() => { window.scrollBy(0, 666)}); break;
                case 'scrollUp': return () => page.evaluate(() => { window.scrollBy(0, -666)}); break;
                case 'close': return () =>  page.close();
                default: return () => Promise.resolve();
            }
        }));                    
    }


    return waterfall(wikiPages.map((pageUrl) => {
        return () => quickLook(decodeURI(pageUrl));
    }));
}

main().finally(() => {
    console.log('Finished');
    browser.close();
});
