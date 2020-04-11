import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jumuhiya } from './entities/jumuhiya.entity';
import { Kanda } from './entities/kanda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jumuhiya, Kanda])],
})
export class KitengoModule {}
