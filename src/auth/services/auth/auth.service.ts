import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../modules/users/services/users.service';
import { Users } from '../../../modules/users/entities/users.entity';
import { generateBasicAuthanticationString } from '../../helpers/basic-authentication-toke.helper';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(username: string, password: string): Promise<Users> {
    const token = generateBasicAuthanticationString(username, password);
    const user = Users.authenticateUserByToken(token);

    return user;
  }
}
