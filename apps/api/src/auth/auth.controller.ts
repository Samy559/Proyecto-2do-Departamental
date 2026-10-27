import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/register')
  register(@Body() body: any) {
    return this.authService.register(body);
  }

  @Post('auth/login')
  login(@Body() body: any) {
    return this.authService.login(body);
  }

  @Get('courses')
  getCourses(@Query('moodleUserId') moodleUserId: string) {
    return this.authService.getCourses(parseInt(moodleUserId, 10));
  }
}