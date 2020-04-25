import { BaseService } from '../../../shared/services/base.service';
import { Users } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<Users, UserDTO> {
  constructor(@InjectRepository(Users) repository: Repository<Users>) {
    super(repository);
  }
}
