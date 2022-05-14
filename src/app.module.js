import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_test'),
    BoardsModule,
    AuthModule,
  ],
})
export class AppModule {}
