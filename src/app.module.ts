import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MichangoModule } from './modules/michango/michango.module';
import { KitengoModule } from './modules/kitengo/kitengo.module';

@Module({
  imports: [MichangoModule, KitengoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
