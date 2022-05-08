import {
  Controller,
  Get,
  Post,
  Delete,
  Dependencies,
  Body,
  Param,
} from '@nestjs/common';

import { BoardsService } from './boards.service';
import { createBoardDto } from './dto/create-board.dto';
@Controller('boards')
@Dependencies(BoardsService) //순수 js로 하려고하니.. 생각보다 제약이 많다 ㅠㅠ
export class BoardsController {
  // constructor(private boardsService:BoardsService){} ts의 접근제한자를 사용해서 아래코드를 위처럼 축약시킬수 있음

  // boardsService; // ts의 경우 위에서 한번 선언해야함.
  constructor(boardsService) {
    this.boardsService = boardsService;
  }

  @Get('/')
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  //https://github.com/babel/babel/issues/10221
  //진짜 js 로  짜는거 개극혐이다 ; babel문제로인한 parameter decorator설정 풀어줘야함
  //해당부분 3시간 사용
  @Post('/')
  createBoard(@Body() createBoardDto) {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:_id')
  getBoardById(@Param('_id') _id) {
    return this.boardsService.getBoardById(_id);
  }

  @Delete('/:_id')
  deleteBoard(@Param('_id') _id) {
    this.boardsService.deleteBoard(_id);
  }

  @Patch('/_id/status')
  updateBoardStatus(@Param('_id') _id, @Body('status') status) {
    return this.boardsService.updateBoardStatus(_id, status);
  }
}
