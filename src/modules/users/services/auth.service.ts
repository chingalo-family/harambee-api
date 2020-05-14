import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../entities/users.entity';
import { generateBasicAuthanticationString } from '../helpers/basic-authentication-toke.helper';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(username: string, password: string): Promise<Users> {
    const token = generateBasicAuthanticationString(username, password);
    const user = Users.authenticateUserByToken(token);

    return user;
  }
}
