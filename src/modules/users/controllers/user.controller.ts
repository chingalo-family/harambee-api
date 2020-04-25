import { Controller } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { Users } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';

@Controller('uses')
export class UserRoleController extends BaseController<Users, UserDTO> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
}
