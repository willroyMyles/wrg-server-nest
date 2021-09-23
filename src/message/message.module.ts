import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import ConversationDatabase from 'src/database/conversation.database';

@Module({
  controllers: [MessageController],
  providers: [MessageService, ConversationDatabase]
})
export class MessageModule {}
