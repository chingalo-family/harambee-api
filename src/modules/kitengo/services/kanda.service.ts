import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { Kanda } from '../entities/kanda.entity';
import { KandaDTO } from '../dtos/kanda.dto';

@Injectable()
export class KandaService extends BaseService<Kanda, KandaDTO> {
  kandRepository: Repository<Kanda>;
  constructor(@InjectRepository(Kanda) repository: Repository<Kanda>) {
    super(repository);
    this.kandRepository = repository;
  }
}
