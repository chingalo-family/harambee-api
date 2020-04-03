import {
  Body,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';

import { BaseService } from '../services/base.service';
import { CustomValidationPipe } from '../pipes/validation.pipe';
import { AuthGuard } from '../guards/auth.guard';
// import { UserDecorator } from 'src/modules/user/decorators/user.decorator';
// import { User } from 'src/modules/user/entities/user.entity';

export class BaseController<T, U> {
  constructor(private readonly baseService: BaseService<T, U>) {}

  @Get()
  @UseGuards(new AuthGuard())
  async findAll() {
    return await this.baseService.findAll();
  }

  @Get(':id')
  @UseGuards(new AuthGuard())
  async findOne(@Param('id') id: string) {
    return await this.baseService.findOneById(id);
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new CustomValidationPipe())
  async post(@Body() data: U) {
    return await this.baseService.create(data);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new CustomValidationPipe())
  async put(@Param('id') id: string, @Body() data: U) {
    return await this.baseService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  async delete(@Param('id') id: string) {
    return await this.baseService.delete(id);
  }
}
