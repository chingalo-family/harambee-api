import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../shared/services/base.service';
import { UserRoles } from '../entities/user-role.entity';
import { UserRolesDTO } from '../dtos/user-roles.dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRoleService extends BaseService<UserRoles, UserRolesDTO> {
  constructor(@InjectRepository(UserRoles) repository: Repository<UserRoles>) {
    super(repository);
  }
}
