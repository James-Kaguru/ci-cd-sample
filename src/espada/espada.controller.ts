import { Body, Controller, ForbiddenException, Get, Post } from '@nestjs/common';
import { CreateEspadaDto } from './dto';
import { EspadaService } from './espada.service';

@Controller('espadas')
export class EspadaController {
  constructor(private readonly espadaService: EspadaService) {}
  @Post()
  create(@Body() dto: CreateEspadaDto) {
    return this.espadaService.create(dto);
  }

  @Get()
  findAll() {
    return this.espadaService.findAll();
  }
}
