import {
  Injectable,
  Module,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schemas';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) userModel) {
    this.userModel = userModel;
  }
  async createUser(props) {
    const { username, password } = props;
    try {
      return await this.userModel.create({ username, password });
    } catch (err) {
      if (err.code === 11000) {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
