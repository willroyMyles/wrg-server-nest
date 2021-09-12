import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInfoModule } from './user-info/user-info.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UserInfoModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
