import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  // private boards = [] ts에서 사용할때 좋음..
  boards = [];

  getAllBoards() {
    return this.boards;
  }
}
