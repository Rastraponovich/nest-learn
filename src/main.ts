import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  // app.useGlobalPipes(new ValidationPipe());

  app.useBodyParser('text', { type: 'application/xml' });
  app.use(cookieParser());
  await app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
}
bootstrap();
