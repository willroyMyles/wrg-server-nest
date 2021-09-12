import { Injectable } from '@nestjs/common';
import UserInfoDatabase from 'src/database/userInfoDB';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';

@Injectable()
export class UserInfoService {

constructor(private db : UserInfoDatabase){}

  create(createUserInfoDto: CreateUserInfoDto) {
    return this.db.create(createUserInfoDto)
  }

  findAll() {
    return this.db.findAll()
  }

  findOne(id: number) {
    return this.db.findOne(id)
  }

  update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return this.db.update(id, updateUserInfoDto);
  }

  remove(id: number) {
    return this.db.remove(id);
  }
}
