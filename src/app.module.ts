import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { OperationsModule } from './operations/operations.module';
import { Operation } from './operations/entities/operation.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [User, Operation],

        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    UsersModule,
    OperationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
