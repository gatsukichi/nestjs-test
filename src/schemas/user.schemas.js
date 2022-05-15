import { Prop, Schema, SchemaFactory, Unique } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ type: String, unique: true })
  username;

  @Prop({ type: String })
  password;
}

export const UserSchema = SchemaFactory.createForClass(User);
