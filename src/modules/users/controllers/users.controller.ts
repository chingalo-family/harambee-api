import { Controller, Post, UsePipes, Body, UseGuards } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { Users } from '../entities/users.entity';
import { UserDTO } from '../dtos/user.dto';
import { UsersService } from '../services/users.service';
import { CustomValidationPipe } from 'src/shared/pipes/validation.pipe';
import { SessionGuard } from '../guards/session.guard';

@Controller('users')
export class UsersController extends BaseController<Users, UserDTO> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Post('register')
  @UseGuards(SessionGuard)
  @UsePipes(new CustomValidationPipe())
  async register(@Body() user: UserDTO) {
    return await this.usersService.create(user);
  }
}
