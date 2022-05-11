import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest_test'),
    BoardsModule,
  ],
})
export class AppModule {}
