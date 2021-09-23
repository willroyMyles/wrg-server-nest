import { Injectable } from '@nestjs/common';
import ConversationDatabase from 'src/database/conversation.database';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';

@Injectable()
export class ConversationService {

  constructor(private db : ConversationDatabase){}
  create(createConversationDto: CreateConversationDto) {
    return this.db.create(createConversationDto);
  }

  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: string) {
    return this.db.findOne(id);
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
