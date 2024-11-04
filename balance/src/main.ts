import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_HOST]
      },
      consumer: {
        groupId: process.env.KAFKA_CONSUMER_GROUP_ID
      },
    }
  })

  await app.startAllMicroservices();
  await app.listen(8080);
}
bootstrap();
