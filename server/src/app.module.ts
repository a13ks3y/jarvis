import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeController } from './youtube/youtube.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'docs'),
      serveRoot: '/jarvis/',
      exclude: ['/api*']
    })
  ],
  controllers: [AppController, YoutubeController],
  providers: [AppService],
})
export class AppModule {}
