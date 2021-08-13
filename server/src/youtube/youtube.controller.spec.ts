import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeController } from './youtube.controller';
import { BrowserService } from '../browser/browser.service';
import { BrowserServiceMock } from '../wiki/browserServiceMock';

describe('YoutubeController', () => {
  let controller: YoutubeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeController],
      providers: [BrowserService],
    })
      .overrideProvider(BrowserService)
      .useClass(BrowserServiceMock)
      .compile();

    controller = module.get<YoutubeController>(YoutubeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should start browsing youtube', () => {
    // should I test puppeteer here? Maybe move it to e2e?
  });
});
