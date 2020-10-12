import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/users.entity';
import { generateBasicAuthanticationString } from '../helpers/basic-authentication-toke.helper';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(username: string, password: string): Promise<User> {
    const token = generateBasicAuthanticationString(username, password);
    const user = User.authenticateUserByToken(token);
    return user;
  }
}
