import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import type { Request } from 'express';

import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

import { AuthService } from '../auth.service';

import { type TokenPayload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(JWTStrategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: TokenPayload) {
    return this.userService.getById(payload.userId);
  }
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string): Promise<User> {
    return this.authenticationService.getAuthenticatedUser(email, password);
  }
}
