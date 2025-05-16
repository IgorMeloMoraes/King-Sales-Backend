import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // Configuração do ConfigModule para carregar variáveis de ambiente
  // O ConfigModule irá carregar as variáveis de ambiente dos arquivos especificados
  // Agora temos o nosso environment configurado para desenvolvimento
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),

    // Configuração do TypeOrmModule para conectar ao banco de dados
    // As variáveis de ambiente são carregadas do arquivo .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
