import { Controller } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { UserRoleService } from '../services/user-roles.service';
import { UserRoles } from '../entities/user-role.entity';
import { UserRolesDTO } from '../dtos/user-roles.dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('userRoles')
@Controller('userRoles')
export class UserRoleController extends BaseController<
  UserRoles,
  UserRolesDTO
> {
  constructor(private readonly userRoleService: UserRoleService) {
    super(userRoleService);
  }
}
