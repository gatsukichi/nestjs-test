import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { uri, options } from '../mongodb.config';
@Module({
  imports: [MongooseModule.forRoot(uri, options), BoardsModule, AuthModule],
})
export class AppModule {}
