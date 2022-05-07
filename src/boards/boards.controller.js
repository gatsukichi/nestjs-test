import { Controller, Get, Dependencies } from '@nestjs/common';
import { BoardsService } from './boards.service';
@Controller('boards')
@Dependencies(BoardsService) //순수 js로 하려고하니.. 생각보다 제약이 많다 ㅠㅠ
export class BoardsController {
  // constructor(private boardsService:BoardsService){} ts의 접근제한자를 사용해서 아래코드를 위처럼 축약시킬수 있음

  // boardsService; // ts의 경우 위에서 한번 선언해야함.
  constructor(boardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }
}
