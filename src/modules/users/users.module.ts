import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersController } from './controllers/users.controller';
import { UserRolesModule } from '../user-roles/user-roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UserRolesModule],
  providers: [UsersService, AuthService],
  controllers: [AuthController, UsersController],
})
export class UsersModule {}
