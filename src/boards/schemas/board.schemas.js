import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Board {
  // @Prop()
  // _id;

  @Prop({ type: String })
  title;

  @Prop({ type: String })
  description;

  @Prop({ type: String })
  status;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
