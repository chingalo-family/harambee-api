import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoles } from './entities/user-role.entity';
import { UserRoleService } from './services/user-roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  providers: [UserRoleService],
})
export class UserRolesModule {}
