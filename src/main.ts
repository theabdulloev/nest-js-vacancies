import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Project Vacancy App')
    .setDescription('Documentation Rest Api')
    .setVersion('1.0.0')
    .addTag('Ismoiljon Abdulloev')
    .addBearerAuth()
    .setContact('Ismoiljon Abdulloev','api','ismoiljon.abdulloev.ibt@gmail.com')
    .build();

  const docement = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, docement);

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(4444);
}
bootstrap();
