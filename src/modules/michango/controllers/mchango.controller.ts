import { Controller, Post, Body, UsePipes } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { Mchango } from 'src/modules/michango/entities/mchango.entity';
import { MchangoDTO } from '../dtos/mchango.dto';
import { MchangoService } from '../services/mchango.service';

@Controller('mchango')
export class MchangoController extends BaseController<Mchango, MchangoDTO> {
  constructor(private readonly mchangoService: MchangoService) {
    super(mchangoService);
  }
}