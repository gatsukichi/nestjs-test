import { Controller, Post, Body, Dependencies } from '@nestjs/common';
import { AuthService } from './auth.service';

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
}
