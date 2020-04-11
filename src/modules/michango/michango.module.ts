import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mchango } from './entities/mchango.entity';
import { MchangoService } from './services/mchango.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mchango])],
  providers: [MchangoService],
})
export class MichangoModule {}
