import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String })
  username;

  @Prop({ type: String })
  password;
}

export const UserSchema = SchemaFactory.createForClass(User);
