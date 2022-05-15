import {
  Controller,
  Post,
  Body,
  Dependencies,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  @Post('/signup')
  signUp(@Body() body) {
    return this.authService.signUp(body);
  }

  @Post('/signin')
  signIn(@Body() body) {
    return this.authService.signIn(body);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user) {
    console.log(user);
    //현재 방법으로는 req.user라는곳에서 유저정보를 받아올수 있다.
    // 하지만 user라는 파라미터로 가져올수는 없을까? -> 커스텀 데코레이터
  }

  /**
   * 미들웨어 종류 : Pipes,Filters, Guards, Interceptors
   *
   * Pipes : 유효성검사, 페이로드 변환/ 데이터를 예상한대로 직렬화
   *
   * Filters : 오류처리 미들웨어, 특정 오류 처리기를 사용할경로와
   * 각 경로 주변의 복잡성을 관리하는 방법을 알 수 있습니다.
   *
   * Guards : 인증 미들웨어, 지정된 경로로 통과할 수 있는사람과
   * 허용되지 않는 사람을 서버에 알려줍니다.
   *
   * Interceptors : 응답 매핑, 캐시관리와 함께 요청 로깅과 같은
   * 전후 미들웨어. 각 요청 전후에 이를 실행하는 기능은 매우 강력하고 유용하다.
   *
   * 미들웨어가 불러와지는 순서 (called)
   * middleware -> guards -> interceptor(before) -> pipe -> controller
   * -> service -> controller -> interceptor(after)->
   * filter(if applicable)-> client
   */
}
