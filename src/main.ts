import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'], // Habilita logs completos
  });
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
