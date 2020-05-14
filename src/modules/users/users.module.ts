import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, AuthService],
  controllers: [AuthController, UsersController],
})
export class UsersModule {}
