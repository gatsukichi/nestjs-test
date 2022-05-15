import {
  Injectable,
  Dependencies,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
@Dependencies(UserRepository)
export class JwtStrategy extends PassportStrategy(Strategy) {
  // extends가 왜되지 ?
  constructor(userRepository) {
    super({
      secretOrKey: 'secret1234',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    // 원인 해결.. super를 먼저 해주는게 전에 어디서 봣던 컨벤션 같았는데
    // 슈퍼를 먼저 셋해줘야하나보다 그것보다 이전에 this값을 업데이트하면 추후 super를 사용하면서
    // 기존값이 덮어씌워지나보다.

    this.userRepository = userRepository;
    // console.log(this.userRepository);
    //왜 this.userRepository가 안될까? extends때문 ?
  }

  async validate(payload) {
    const { username } = payload;
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
