import { BaseService } from '../../../shared/services/base.service';
import { Users } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    const user = await this.UsersRepository.findOne({
      where: { token },
    });
    return user.toResponseObject();
  }

  async findUserByUsername(username): Promise<Users> {
    const user = await this.UsersRepository.findOne({
      where: { username },
    });
    return user.toResponseObject();
  }

  async findOneById(id: string): Promise<any> {
    const user = await this.UsersRepository.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return user.toResponseObject(false);
  }

  async findAll(): Promise<any[]> {
    const users = await this.UsersRepository.find();

    return users.map(user => user.toResponseObject(false));
  }
}
