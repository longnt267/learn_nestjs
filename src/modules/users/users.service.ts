import { Injectable } from '@nestjs/common';
import { ErrorHelper } from 'src/helper/error.utils';
import { FindManyOptions } from 'typeorm';
import { Users } from '../entities/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { UserRepository } from './repository/users.repository';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async findOne(conditions: Partial<Users>, options?: FindManyOptions<Users>) {
    return await this.usersRepository.findOne(conditions, options);
  }

  async createUser(payload: CreateUserDto) {
    const { user_name, password } = payload;
    const user = await this.getUserByUsername(user_name);
    if (user) {
      ErrorHelper.BadRequestException('User is already exist');
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return await this.usersRepository.create({ user_name, password: hashedPassword });
  }

  async getUserByUsername(user_name: string) {
    return await this.usersRepository.findOne({ user_name });
  }
}
