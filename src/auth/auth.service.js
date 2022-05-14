import { Injectable, Dependencies } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
@Dependencies(UserRepository)
export class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
}
