import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
})
export class UsersModule {}