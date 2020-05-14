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
import { SessionGuard } from '../../modules/users/guards/session.guard';

export class BaseController<T, U> {
  constructor(private readonly baseService: BaseService<T, U>) {}

  @Get()
  @UseGuards(SessionGuard)
  async findAll() {
    return await this.baseService.findAll();
  }

  @Get(':id')
  @UseGuards(SessionGuard)
  async findOne(@Param('id') id: string) {
    return await this.baseService.findOneById(id);
  }

  @Post()
  @UseGuards(SessionGuard)
  @UsePipes(new CustomValidationPipe())
  async post(@Body() data: U) {
    return await this.baseService.create(data);
  }

  @Put(':id')
  @UseGuards(SessionGuard)
  @UsePipes(new CustomValidationPipe())
  async put(@Param('id') id: string, @Body() data: U) {
    return await this.baseService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(SessionGuard)
  async delete(@Param('id') id: string) {
    return await this.baseService.delete(id);
  }
}
