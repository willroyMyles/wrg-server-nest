import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import ConversationDatabase from 'src/database/conversation.database';
import MessagesWebsocet from './messages.websocket';

@Module({
  controllers: [MessageController],
  providers: [MessageService, ConversationDatabase, MessagesWebsocet]
})
export class MessageModule {}
