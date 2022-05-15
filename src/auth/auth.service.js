import {
  Injectable,
  Dependencies,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
@Injectable()
@Dependencies(UserRepository)
export class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async signUp(props) {
    // 원래는 dto라는걸 써서 validation 검사등 할수 있음
    return this.userRepository.createUser(props);
  }

  async signIn(props) {
    const { username, password } = props;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'login success';
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
