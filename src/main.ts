
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  // Environment checks
  const frontUrl = process.env.FRONT_ENDPOINT;
  if (!frontUrl) {
    logger.error('FRONT_ENDPOINT is not defined');
    throw new Error('FRONT_ENDPOINT is not defined');
  }

  // Security middlewares
  app.use(helmet());
  app.use(cookieParser());

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS
  app.enableCors({
    origin: [frontUrl, 'http://localhost:3000'],
    credentials: true,
  });

  // Graceful shutdown
  app.enableShutdownHooks();

  const port = process.env.PORT || 3000;

  await app.listen(port);

  logger.log(`🚀 Server running on port ${port}`);
}

bootstrap();

