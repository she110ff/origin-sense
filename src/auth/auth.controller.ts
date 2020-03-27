import {
  Controller,
  Get,
  UseGuards,
  Req,
  Res,
  Body,
  Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  async signup(@Body() user: UserDTO): Promise<UserDTO> {
    console.log('signup :', user);
    let usr = await this.userService.findOne(user.id);
    if (usr) {
      // already signed up error masseage
    } else {
      //
    }
    console.log('return usr :', usr);
    return usr;
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    // initiate the Google oauth2 logi flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req, @Res() res) {
    const jwt: string = req.user.jwt;
    console.log(jwt);
    if (jwt) {
      res.redirect('http://localhost:3000/login/google/success/jwt');
    }
  }
}
