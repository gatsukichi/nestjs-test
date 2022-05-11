import { Injectable, NotFoundException } from '@nestjs/common';
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
      _id: 'abc',
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  // TODO: 추후 수정
  getBoardById(_id) {
    console.log(this.boards);
    const found = this.boards.find((board) => board._id === _id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with _id ${_id}`);
    }

    return found;
  }

  deleteBoard(_id) {
    const found = this.getBoardById(_id);
    this.boards = this.boards.filter((board) => board._id !== found._id);
  }

  updateBoardStatus(_id, status) {
    const board = this.getBoardById(_id);
    board.status = status;
    return board;
  }
}
