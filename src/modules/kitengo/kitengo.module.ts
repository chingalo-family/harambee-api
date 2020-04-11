import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jumuhiya } from './entities/jumuhiya.entity';
import { Kanda } from './entities/kanda.entity';
import { KandaService } from './services/kanda.service';
import { JumuhiyaService } from './services/jumuhiya.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jumuhiya, Kanda])],
  providers: [KandaService, JumuhiyaService],
})
export class KitengoModule {}
