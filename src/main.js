import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const serverConfig = config.server;
  // const con = config.get('server');
  // console.log(con);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
  }

  await app.listen(serverConfig.port, '0.0.0.0');
  Logger.log(`Application running on port ${serverConfig.port}`);
}
bootstrap();
