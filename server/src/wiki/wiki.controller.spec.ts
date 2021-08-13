import { Test, TestingModule } from '@nestjs/testing';
import { WikiController } from './wiki.controller';
import { BrowserService } from '../browser/browser.service';
import { BrowserServiceMock } from './browserServiceMock';

describe('WikiController', () => {
  let controller: WikiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WikiController],
      providers: [BrowserService],
    })
      .overrideProvider(BrowserService)
      .useClass(BrowserServiceMock)
      .compile();

    controller = module.get<WikiController>(WikiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
