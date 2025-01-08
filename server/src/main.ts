import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import {ConfigService} from '@nestjs/config'
async function bootstrap() {


  const logger = new Logger('Main (main.ts)');
  const app = await NestFactory.create(AppModule,{
    cors: {
      origin: 'http://localhost:4200',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      
    }
  });

  const configService = app.get(ConfigService);
  const PORT = parseInt(configService.get('PORT'));
  await app.listen(PORT || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
