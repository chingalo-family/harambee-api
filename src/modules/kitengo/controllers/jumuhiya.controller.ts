import { Controller } from '@nestjs/common';

import { BaseController } from 'src/shared/controllers/base.controller';
import { Jumuhiya } from '../entities/jumuhiya.entity';
import { JumuhiyaDTO } from '../dtos/jumuhiya.dto';
import { JumuhiyaService } from '../services/jumuhiya.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jumuhiya')
@Controller('jumuhiya')
export class JumuhiyaController extends BaseController<Jumuhiya, JumuhiyaDTO> {
  constructor(private readonly jumuhiyaService: JumuhiyaService) {
    super(jumuhiyaService);
  }
}
