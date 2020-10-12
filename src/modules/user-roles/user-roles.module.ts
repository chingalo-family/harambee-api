import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleController } from './controllers/user-role.controller';
import { UserRoles } from './entities/user-role.entity';
import { UserRoleService } from './services/user-roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  controllers: [UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService],
})
export class UserRolesModule {}
