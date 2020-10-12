import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as _ from 'lodash';

import { BaseService } from '../../../shared/services/base.service';
import { User } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { UserRoleService } from '../../user-roles/services/user-roles.service';

@Injectable()
export class UsersService extends BaseService<User, UserDTO> {
  UsersRepository: Repository<User>;
  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
    private readonly userRoleService: UserRoleService,
  ) {
    super(repository);
    this.UsersRepository = repository;
  }

  async create(data: UserDTO) {
    const userCheck = await this.findUserByUsername(data.username);
    if (userCheck) {
      throw new HttpException(
        'Username already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const role = await this.userRoleService.userRoleRepository.findOne({
      where: { name: data.userRole },
    });

    if (!role) {
      throw new HttpException(
        'Role specified does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    const userObject = _.omit(data, ['userRole']);
    const user = await this.UsersRepository.save({
      ...userObject,
      userRole: role,
    });

    return await this.findOneById(user.id);
  }

  async findUserByToken(token): Promise<User> {
    const user = await this.UsersRepository.findOne({
      where: { token },
    });
    return user.toResponseObject();
  }

  async findUserByUsername(username: string): Promise<User> {
    return await this.UsersRepository.findOne({
      where: { username },
      relations: this.relations,
    });
  }

  async findOneById(id: string): Promise<any> {
    const user = await this.UsersRepository.findOne({
      where: { id },
      relations: this.relations,
    });

    if (!user) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findAll(): Promise<any[]> {
    const users = await this.UsersRepository.find({
      relations: this.relations,
    });

    return users.map(user => user);
  }

  get relations() {
    return ['userRole'];
  }
}
