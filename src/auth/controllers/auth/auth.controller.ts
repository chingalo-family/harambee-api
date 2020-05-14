import { Controller, Req, Get, Post, Body } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('logout')
  async logout(@Req() request): Promise<any> {
    request.session.user = null;
    return {
      httpStatus: 'OK',
      httpStatusCode: 200,
      status: 'OK',
      message: 'User logged out successfully',
    };
  }

  @Post('login')
  async login(@Req() request, @Body() params): Promise<any> {
    const user = await this.authService.login(params.username, params.password);
    if (user) {
      request.session.user = user;
      return user;
    } else {
      return {
        httpStatus: 'Unauthorized',
        httpStatusCode: 401,
        status: 'ERROR',
        message: 'Password or Username is incorrect.',
      };
    }
  }
}
