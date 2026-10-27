import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response) {
    return res.redirect('http://localhost:3000');
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }

  @Get('health')
  getHealth() {
    return { status: 'ok', service: 'Backend IINICIA API', port: 4000 };
  }
}

