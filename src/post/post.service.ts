import { Injectable } from '@nestjs/common';
import PostDatabse from 'src/database/post.database';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  constructor(private db : PostDatabse){}

  create(createPostDto: CreatePostDto) {
    return this.db.create(createPostDto);
  }

  findAll() {
    return this.db.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
