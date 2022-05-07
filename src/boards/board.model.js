import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Board {
  // @Prop()
  // id;

  @Prop({ type: String })
  title;

  @Prop({ type: String })
  description;

  @Prop({ type: String })
  status;
}

export const BoardStatus = {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PRIVATE',
};
// export interface Board {
//   id=this.id;
//   title=this.title;
//   description=this.description;
//   status=this.status;
// }

// export enum BoardStatus {
//   PUBLIC = "PUBLIC",
//   PRIVATE = "PRIVATE"
// }

export const BoardSchema = SchemaFactory.createForClass(Board);
