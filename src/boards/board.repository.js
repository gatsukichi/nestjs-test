// 리포지터리 패턴이라는게 존재한다.
// DB DML 같은것들이 모여있게되고
// 일관성있게 사용하기 위해서 쓰기 좋을꺼같다.
// 예시 - 어디서는
// 1. findOne - save
// 2. updateOne
// 3. findOneAndUpdate
// 등등.. 여러 방법으로 업데이트를 할 수 있다. 하지만 유지보수가 힘들어진다. 때문에 좋은거같다.
// 물론 실제로는 여러 이유가있다.
// 참고하면 좋은 자료들 https://luckyyowu.tistory.com/376
// https://medium.com/@erickwendel/generic-repository-with-typescript-and-node-js-731c10a1b98e
// https://wlswoo.tistory.com/40
import { Injectable, Module } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from '../schemas/board.schemas';

@Injectable()
export class BoardRepository {
  constructor(@InjectModel(Board.name) boardModel) {
    this.boardModel = boardModel;
  }

  async findAll() {
    return this.boardModel.find();
  }
}
