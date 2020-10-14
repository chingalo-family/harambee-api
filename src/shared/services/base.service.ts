import { Repository, DeleteResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { HttpException, HttpStatus } from '@nestjs/common';
export class BaseService<T, U> {
  constructor(private readonly repository: Repository<T>) {}

  get relations() {
    return [];
  }

  async findAll(): Promise<T[]> {
    const data = await this.repository.find({ relations: this.relations });
    return data;
  }

  async findOneById(id: string): Promise<T> {
    const data = await this.repository.findOne({
      where: { id },
      relations: this.relations,
    });

    if (!data) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }

    return data;
  }

  async create(data: U): Promise<any> {
    const createdData = await this.repository.save(data);

    return createdData;
  }

  async update(id: string, data: QueryDeepPartialEntity<T>) {
    await this.repository.update(id, data);
    return await this.findOneById(id);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
