import { Injectable, NotFoundException, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { BoardRepository } from './board.repository';

@Injectable()
@Dependencies(BoardRepository)
export class BoardsService {
  constructor(boardRepository) {
    this.boardRepository = boardRepository;
  }
  // private boards = [] ts에서 사용할때 좋음..
  async getAllBoards() {
    console.log(this.boardRepository);
    return await this.boardRepository.findAll();
  }

  async createBoard(createBoardDto) {
    const { title, description } = createBoardDto;
    const board = {
      title,
      description,
      status: 'PUBLIC',
    };
    return await this.BoardModel.create(board);
  }

  // TODO: 추후 수정
  getBoardById(_id) {
    const found = this.BoardModel.findOne({ _id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with _id ${_id}`);
    }

    return found;
  }

  async deleteBoard(_id) {
    const found = this.getBoardById(_id);
    return await found.remove();
  }

  async updateBoardStatus(_id, status) {
    const board = this.getBoardById(_id);
    return await board.updateOne(board, { status });
  }
}
