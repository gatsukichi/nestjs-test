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
    return await this.boardRepository.findAll();
  }

  async createBoard(createBoardDto) {
    const { title, description, owner } = createBoardDto;
    const board = {
      title,
      description,
      status: 'PUBLIC',
      owner,
    };
    return await this.boardRepository.createOne(board);
  }

  // TODO: 추후 수정
  async getBoardById(_id) {
    const found = await this.boardRepository.findOne({ _id });
    if (!found) {
      throw new NotFoundException(`Can't find Board with _id ${_id}`);
    }

    return found;
  }

  deleteBoard(_id) {
    // const found = this.getBoardById(_id);
    // 두번 쿼리날리는게 거슬린다..
    return this.boardRepository.deleteOne({ _id });
  }

  updateBoardStatus(_id, status) {
    // const board = this.getBoardById(_id);
    // 마찬가지로 두번 쿼리날리는게 거슬린다.
    // memo: 이미 찾은 document가 있는경우 document라는
    // 몽구스 문서를 읽어보면 첫번째 인자로 찾은 doc을 전달해주면 된다.
    return this.boardRepository.updateOne({ _id }, { status });
  }
}
