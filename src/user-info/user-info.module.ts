import { Module } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { UserInfoController } from './user-info.controller';
import UserInfoDatabase from '../database/userInfo.database';

@Module({
  controllers: [UserInfoController],
  providers: [UserInfoService, UserInfoDatabase]
})
export class UserInfoModule {}
