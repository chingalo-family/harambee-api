import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';

@Module({
  providers: [AuthService]
})
export class AuthModule {}
