import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Board {
  @Prop()
  id;

  @Prop()
  title;

  @Prop()
  description;

  @Prop()
  status;
}

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
