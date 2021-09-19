import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoModule } from './user-info/user-info.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { ConversationModule } from './conversation/conversation.module';

@Module({
  imports: [UserInfoModule, PostModule, CommentModule, ConversationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
