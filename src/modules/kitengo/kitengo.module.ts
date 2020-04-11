import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jumuhiya } from './entities/jumuhiya.entity';
import { Kanda } from './entities/kanda.entity';
import { KandaService } from './services/kanda.service';
import { JumuhiyaService } from './services/jumuhiya.service';
import { JumuhiyaController } from './controllers/jumuhiya.controller';
import { KandaController } from './controllers/kanda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Jumuhiya, Kanda])],
  providers: [KandaService, JumuhiyaService],
  controllers: [JumuhiyaController, KandaController],
})
export class KitengoModule {}
