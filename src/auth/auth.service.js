import {
  Injectable,
  Dependencies,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
@Dependencies([UserRepository, JwtService]) // 대충 눈치껏 배열처리하고 parameter에 추가해봣는데 잘된다.
export class AuthService {
  constructor(userRepository, JwtService) {
    this.userRepository = userRepository;
    this.jwtService = JwtService;
  }
  async signUp(props) {
    // 원래는 dto라는걸 써서 validation 검사등 할수 있음
    return this.userRepository.createUser(props);
  }

  async signIn(props) {
    const { username, password } = props;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload);
      const payload = {
        /*유저이름, role,이메일 등등 많이 넣어준다. 중요한정보는 넣지말것.jwt특성 */
        username,
      };
      const accessToken = await this.jwtService.sign(payload);
      return {
        accessToken,
        message: 'login success',
      };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
