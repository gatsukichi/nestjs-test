import { Controller } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  // constructor(private boardsService:BoardsService){} ts의 접근제한자를 사용해서 아래코드를 위처럼 축약시킬수 있음

  // boardsService; ts의 경우 위에서 한번 선언해야함.
  constructor(boardsService) {
    this.boardsService = boardsService;
  }
}
