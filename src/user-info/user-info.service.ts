import { Injectable } from '@nestjs/common';
import UserInfoDatabase from '../database/userInfo.database';
import { AddToWatchRequest } from './dto/add-to-watch.dto';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';

@Injectable()
export class UserInfoService {
  addToWatch(postToAdd: AddToWatchRequest) {
    return this.db.addToWatch(postToAdd)
  }

constructor(private db : UserInfoDatabase){}

  create(info: any) {
    var data : CreateUserInfoDto = new CreateUserInfoDto();
    data.email = info.email;
    data.userId = info.userId;
    data.userImageUrl = info.userImageUrl;
    data.username = info.username;

    return this.db.create(data)
  }

  findAll() {
    return this.db.findAll()
  }

  findOne(id: string) {
    return this.db.findOne(id)
  }

  update(id: string, updateUserInfoDto: UpdateUserInfoDto) {
    return this.db.update(id, updateUserInfoDto);
  }

  remove(id: string) {
    return this.db.remove(id);
  }
}
