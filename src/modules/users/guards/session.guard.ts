import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../entities/users.entity';

@Injectable()
export class SessionGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();

    try {
      if (request.session.user) {
        request.session.previousPath = request.path;
        return true;
      }

      if (request.headers['authorization']) {
        const user = await User.authenticateUserByToken(
          request.headers['authorization'].replace('Basic ', ''),
        );

        if (user) {
          request.session.user = user;
          return true;
        } else {
          return false;
        }
      }
    } catch (e) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
