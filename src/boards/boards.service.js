import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
@Injectable()
export class BoardsService {
  // private boards = [] ts에서 사용할때 좋음..
  boards = [];

  getAllBoards() {
    return this.boards;
  }

  createBoard(title, description) {
    const board = {
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}
