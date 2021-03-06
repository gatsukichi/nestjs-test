import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Dependencies,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Bind,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { BoardsService } from './boards.service';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
@UseGuards(AuthGuard())
@Dependencies(BoardsService) //순수 js로 하려고하니.. 생각보다 제약이 많다 ㅠㅠ
export class BoardsController {
  // constructor(private boardsService:BoardsService){} ts의 접근제한자를 사용해서 아래코드를 위처럼 축약시킬수 있음
  logger = new Logger('BoardsController');
  // boardsService; // ts의 경우 위에서 한번 선언해야함.
  constructor(boardsService) {
    this.boardsService = boardsService;
  }

  @Get('/')
  getAllBoards(@GetUser() user) {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardsService.getAllBoards({ owner: user.username });
  }

  //https://github.com/babel/babel/issues/10221
  //진짜 js 로  짜는거 개극혐이다 ; babel문제로인한 parameter decorator설정 풀어줘야함
  //해당부분 3시간 사용

  //공홈 피셜
  // 다만 class validator 에서만 그럴수 있다. 다른 스코프 이면 될지도?..아닌가
  // WARNING
  // The techniques in this section require TypeScript, and are not available if your app is written using vanilla JavaScript.

  @Post()
  // @Bind(Body()) => 사실 필요없엇던것..
  // @UsePipes(ValidationPipe)
  createBoard(@Body() body, @GetUser() user) {
    this.logger.verbose(
      `User ${user.username} creating a new board. Payload: ${JSON.stringify(
        body,
      )}`,
    );
    return this.boardsService.createBoard({ ...body, owner: user.username });
  }

  @Get('/:_id')
  getBoardById(@Param('_id') _id) {
    return this.boardsService.getBoardById(_id);
  }

  @Delete('/:_id')
  deleteBoard(@Param('_id') _id, @GetUser() user) {
    return this.boardsService.deleteBoard({ _id, owner: user.username });
  }

  @Patch('/:_id/status')
  updateBoardStatus(
    @Param('_id') _id,
    @Body('status' /* BoardStatusValidationPipe */) status,
  ) {
    return this.boardsService.updateBoardStatus(_id, status);
  }
}
