import { Injectable, Module } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schemas';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) userModel) {
    this.userModel = userModel;
  }
}
