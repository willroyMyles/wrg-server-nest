import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import CommentDatabase from 'src/database/comment.database';

@Module({
  controllers: [CommentController],
  providers: [CommentService, CommentDatabase],
  
})
export class CommentModule {}
