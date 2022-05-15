import { Injectable, Dependencies } from '@nestjs/common';
import { UserRepository } from './user.repository';

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
}
