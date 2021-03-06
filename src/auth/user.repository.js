import {
  Injectable,
  Module,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schemas';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) userModel) {
    this.userModel = userModel;
  }
  async createUser(props) {
    const { username, password } = props;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      await this.userModel.create({
        username,
        password: hashedPassword,
      });
    } catch (err) {
      if (err.code === 11000) {
        // 몽구스 기준 유니크키중복됫을때 발생하는 Error Code
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findOne(query) {
    const user = await this.userModel.findOne(query);
    return user;
  }
}
