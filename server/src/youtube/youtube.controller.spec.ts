import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeController } from './youtube.controller';

describe('YoutubeController', () => {
  let controller: YoutubeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeController],
    }).compile();

    controller = module.get<YoutubeController>(YoutubeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should start browsing youtube', () => {
    // should I test puppeteer here? Maybe move it to e2e?
  });
});
