import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Users } from '../entities/users.entity';

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    try {
      if (request.session.user) {
        request.session.previousPath = request.path;
        return true;
      }

      if (request.headers['authorization']) {
        const user = Users.authenticateUserByToken(
          request.headers['authorization'].replace('Basic ', ''),
        );

        if (user) {
          request.session.user = user;
          return true;
        }
      }
    } catch (e) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
