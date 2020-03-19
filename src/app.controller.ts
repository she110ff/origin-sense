import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam } from '@nestjs/swagger';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @ApiParam({ name: 'limit', required: false })
  async login(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return 'hello';
  }
}
