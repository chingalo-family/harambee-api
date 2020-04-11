import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mchango } from './entities/mchango.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mchango])],
})
export class MichangoModule {}
