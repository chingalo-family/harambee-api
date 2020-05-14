import { BaseService } from '../../../shared/services/base.service';
import { Users } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<Users, UserDTO> {
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {
    super(UsersRepository);
  }

  async findUserByToken(token): Promise<Users> {
    return await this.UsersRepository.findOne({
      where: { confirmationToken: token },
    });
  }
  async findUserByUsername(username): Promise<Users> {
    const user = await this.UsersRepository.findOne({
      where: { username },
    });
    return user;
  }
}
