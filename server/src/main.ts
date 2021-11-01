import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.enableCors();
  app.setGlobalPrefix('api', {
    exclude: ['.', '/', './', 'jarvis', 'jarvis/', '/jarvis/'],
  });
  await app.listen(3000);
}
bootstrap();
