import { Injectable } from '@nestjs/common';
import  CommentDatabase  from 'src/database/comment.database';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {

  constructor(private db : CommentDatabase){}
  create(createCommentDto: CreateCommentDto) {
    return this.db.create(createCommentDto);
  }

  findAll() {
    return this.db.findAll();
  }

  findOne(id: string) {
    return this.db.findOne(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.db.update(id, updateCommentDto);
  }

  remove(id: string) {
    return this.db.remove(id);
  }
}
