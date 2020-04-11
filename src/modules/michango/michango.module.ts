import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mchango } from './entities/mchango.entity';
import { MchangoService } from './services/mchango.service';
import { MchangoController } from './controllers/mchango.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mchango])],
  providers: [MchangoService],
  controllers: [MchangoController],
})
export class MichangoModule {}
