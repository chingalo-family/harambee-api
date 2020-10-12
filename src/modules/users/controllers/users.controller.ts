import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BaseController } from 'src/shared/controllers/base.controller';
import { User } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController extends BaseController<User, UserDTO> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
