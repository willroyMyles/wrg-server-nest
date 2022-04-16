import { Injectable } from '@nestjs/common';
import QuestionDatabase from 'src/database/question.database';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {

  constructor(private db: QuestionDatabase) { }
  create(createQuestionDto: CreateQuestionDto) {
    return this.db.create(createQuestionDto);
  }

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
