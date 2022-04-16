import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import QuestionDatabase from 'src/database/question.database';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, QuestionDatabase]
})
export class QuestionModule { }
