import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeController } from './youtube/youtube.controller';
import { BrowserService } from './browser/browser.service';
import { WikiController } from './wiki/wiki.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'docs'),
      serveRoot: '/jarvis/',
      exclude: ['/api*']
    }),
    BrowserService
  ],
  controllers: [AppController, YoutubeController, WikiController],
  providers: [AppService, BrowserService],
})
export class AppModule {}
