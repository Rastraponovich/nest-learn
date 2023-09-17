import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  // app.useGlobalPipes(new ValidationPipe());

  app.useBodyParser('text', { type: 'application/xml' });
  await app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}
bootstrap();
