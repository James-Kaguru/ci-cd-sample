import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EspadaDocument = Espada & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Espada {
  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  rank: number;

}

export const EspadaSchema = SchemaFactory.createForClass(Espada);
