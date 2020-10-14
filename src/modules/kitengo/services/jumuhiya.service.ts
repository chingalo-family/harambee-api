import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';
import { Jumuhiya } from '../entities/jumuhiya.entity';
import { JumuhiyaDTO } from '../dtos/jumuhiya.dto';
import { KandaService } from './kanda.service';
import { sanitizeJumuhiya } from '../helpers/jumuhiya-sanitizer.helper';

@Injectable()
export class JumuhiyaService extends BaseService<Jumuhiya, JumuhiyaDTO> {
  jumuhiyaRepository: Repository<Jumuhiya>;
  constructor(
    @InjectRepository(Jumuhiya) repository: Repository<Jumuhiya>,
    private kandaService: KandaService,
  ) {
    super(repository);
    this.jumuhiyaRepository = repository;
  }

  async create(data: JumuhiyaDTO) {
    const kanda = await this.kandaService.kandRepository.findOne({
      where: { name: data.kanda },
    });
    if (!kanda) {
      throw new HttpException('Kanda does not exist', HttpStatus.BAD_REQUEST);
    }

    const jumuhiyaCheck = await this.jumuhiyaRepository.findOne({
      where: { name: data.name },
    });

    if (jumuhiyaCheck) {
      throw new HttpException(
        'Jumuhiya already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const jumuhiya = await this.jumuhiyaRepository.save({ ...data, kanda });
    return this.findOneById(jumuhiya.id);
  }

  async findAll(): Promise<any[]> {
    const jumuhiya = await this.jumuhiyaRepository.find({
      relations: this.relations,
    });
    return jumuhiya.map(data => sanitizeJumuhiya(data));
  }

  async findOneById(id: string): Promise<any> {
    const jumuhiya = await this.jumuhiyaRepository.findOne({
      where: { id },
      relations: this.relations,
    });

    return sanitizeJumuhiya(jumuhiya);
  }

  get relations() {
    return ['kanda'];
  }
}
