import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport} from '@nestjs/microservices';
import { join } from 'path';

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package:'pharmacy',
    protoPath: join(__dirname, '../src/proto/pharmacy.proto'),
  }
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
