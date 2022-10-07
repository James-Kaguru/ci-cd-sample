import { Module } from '@nestjs/common';
import { EspadaService } from './espada.service';
import { EspadaController } from './espada.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Espada, EspadaSchema } from './schema/espada.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Espada.name, schema: EspadaSchema }])],
  providers: [EspadaService],
  controllers: [EspadaController]
})
export class EspadaModule {}
