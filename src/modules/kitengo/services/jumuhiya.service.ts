import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { Jumuhiya } from '../entities/jumuhiya.entity';
import { JumuhiyaDTO } from '../dtos/jumuhiya.dto';

@Injectable()
export class JumuhiyaService extends BaseService<Jumuhiya, JumuhiyaDTO> {
  constructor(@InjectRepository(Jumuhiya) repository: Repository<Jumuhiya>) {
    super(repository);
  }
}
