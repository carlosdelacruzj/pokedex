import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      stopAtFirstError: true,
      transform: true, // Habilita la transformación automática de tipos
      transformOptions: {
        enableImplicitConversion: true, // Permite la conversión implícita de tipos
      },
    }),
  );
  app.setGlobalPrefix('api/v2');
  await app.listen(3000);
}
bootstrap();
