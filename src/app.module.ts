import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './validation/env.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { EspadaModule } from './espada/espada.module';

@Module({
  imports: [
    EspadaModule,
    ConfigModule.forRoot({
    envFilePath: ['.env','.env.development.local', '.env.development'],
    cache: true,
    isGlobal: true,
    validate,
  }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
