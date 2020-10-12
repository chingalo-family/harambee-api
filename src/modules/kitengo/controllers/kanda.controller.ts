import { Controller } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { Kanda } from '../entities/kanda.entity';
import { KandaDTO } from '../dtos/kanda.dto';
import { KandaService } from '../services/kanda.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kanda')
@Controller('kanda')
export class KandaController extends BaseController<Kanda, KandaDTO> {
  constructor(private readonly kandaService: KandaService) {
    super(kandaService);
  }
}
