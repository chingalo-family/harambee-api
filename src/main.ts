import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as session from 'express-session';

import { AppModule } from './app.module';

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

  const options = new DocumentBuilder()
    .setTitle('Harambee API documentantion')
    .setDescription(
      'This is the documentation to be used with mobile and web application for management of harambee at St. Antony Maria Claret parish',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
}
bootstrap();
