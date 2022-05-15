import { Injectable, Module } from '@nestjs/common';
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

    return await this.userModel.create({ username, password });
  }
}
