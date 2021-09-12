import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import PostDatabse from 'src/database/postDb';

@Module({
  controllers: [PostController],
  providers: [PostService, PostDatabse]

})
export class PostModule {}
