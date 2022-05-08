import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
  // private boards = [] ts에서 사용할때 좋음..
  boards = [];

  getAllBoards() {
    return this.boards;
  }

  createBoard(createBoardDto) {
    const { title, description } = createBoardDto;
    const board = {
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  // TODO: 추후 수정
  getBoardByID(_id) {
    return this.boards.find((board) => board._id === _id);
  }

  deleteBoard(_id) {
    this.boards = this.boards.filter((board) => board._id !== _id);
  }
}
