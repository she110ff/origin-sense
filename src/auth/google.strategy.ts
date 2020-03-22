import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '1089897906341-nalh8k97qoci3sq0retqbrcrgid18t90.apps.googleusercontent.com',
      clientSecret: 'PG_7iYcZJEemLSAfkTTWfEDR',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    request: any,
    access_token: string,
    refreshToken: string,
    profile,
    done: Function,
  ) {
    try {
      console.log(profile);
      const jwt: string = 'placehold jwt';
      const user = { jwt };
      done(null, user);
    } catch (e) {
      done(e, false);
    }
  }
}
