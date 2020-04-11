import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { Mchango } from '../entities/mchango.entity';
import { MchangoDTO } from '../dtos/mchango.dto';

@Injectable()
export class MchangoService extends BaseService<Mchango, MchangoDTO> {
  constructor(@InjectRepository(Mchango) repository: Repository<Mchango>) {
    super(repository);
  }
}
