import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  // app.useGlobalPipes(new ValidationPipe());

  app.useBodyParser('text', { type: 'application/xml' });
  app.use(cookieParser());

  const configService = app.get(ConfigService);

  const PORT = configService.get('PORT');
  await app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
  });
}
bootstrap();
