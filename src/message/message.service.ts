import { Injectable } from '@nestjs/common';
import ConversationDatabase from 'src/database/conversation.database';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  findMessages(id: string) {
    this.db.findMessages(id);
  }

  constructor(private db : ConversationDatabase){}

  addToConversation(id : string, createMessageDto: CreateMessageDto) {
    return this.db.addToConversation(id, createMessageDto);
  }
  create(createMessageDto: CreateMessageDto) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all message`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
