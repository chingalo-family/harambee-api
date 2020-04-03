import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    //  returning false throws Forbiden exceptions.
    return true;
  }
}
