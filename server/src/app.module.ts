import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { YoutubeController } from './youtube/youtube.controller';
import { BrowserService } from './browser/browser.service';
import { WikiController } from './wiki/wiki.controller';
import { HttpModule } from '@nestjs/axios';
import { ViewController } from './view/view.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'docs'),
      serveRoot: '/jarvis/',
      exclude: ['/api*', '/'],
    }),
    HttpModule,
  ],
  controllers: [
    AppController,
    YoutubeController,
    WikiController,
    ViewController,
  ],
  providers: [BrowserService],
})
export class AppModule {}
