import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: process.env.SECRET || 'chingalo',
      name: 'harambee-api',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 60 * 24 * 1000,
      },
    }),
  );
  await app.listen(port);
}
bootstrap();
