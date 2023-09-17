import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { MyXMLParser } from 'src/common/xml.parcer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operation } from './entities/operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Operation])],
  controllers: [OperationsController],
  providers: [OperationsService, MyXMLParser],
})
export class OperationsModule {}
