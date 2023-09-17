import { Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { MyXMLParser } from 'src/common/xml.parcer';
import { Operation } from './entities/operation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OperationsService {
  constructor(
    private parser: MyXMLParser,
    @InjectRepository(Operation)
    private operationRepository: Repository<Operation>,
  ) {}
  async create(createOperationDto: CreateOperationDto) {
    const result = this.parser.parse(createOperationDto as string);

    const situationValues = [5, 4, 24];
    const situation = result.a.Situation;

    if (situationValues.includes(situation)) {
      const saved = await this.operationRepository.save(result.a);
      console.log(saved);
    }

    return 'This action adds a new operation';
  }

  findAll() {
    return this.operationRepository.find();
    return `This action returns all operations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} operation`;
  }

  update(id: number, updateOperationDto: UpdateOperationDto) {
    return `This action updates a #${id} operation`;
  }

  remove(id: number) {
    return `This action removes a #${id} operation`;
  }

  async removeAll() {
    return await this.operationRepository.clear();
  }
}
