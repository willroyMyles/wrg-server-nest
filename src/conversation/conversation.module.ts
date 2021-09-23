import { Module } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import ConversationDatabase from 'src/database/conversation.database';

@Module({
  controllers: [ConversationController],
  providers: [ConversationService, ConversationDatabase]
})
export class ConversationModule {}
