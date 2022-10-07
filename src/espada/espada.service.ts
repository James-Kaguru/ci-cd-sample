import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateEspadaDto } from './dto';
import { Model } from 'mongoose';
import { Espada, EspadaDocument } from './schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EspadaService {
  constructor(
    @InjectModel(Espada.name)
    private espadaDocumentModel: Model<EspadaDocument>,
  ) {}
  create(dto: CreateEspadaDto) {
    try {
      return this.espadaDocumentModel.create({
        ...dto,
      });
    } catch (e) {
      if (e.name === 'MongoServerError' && e.code === 11000) {
        throw new ForbiddenException('Duplicate error');
      }
      throw e;
    }
  }

  findAll() {
    return this.espadaDocumentModel.find();
  }
}
