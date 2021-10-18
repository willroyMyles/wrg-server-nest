import { Injectable } from '@nestjs/common';
import PostDatabse from 'src/database/post.database';
import { CreatePostDto } from './dto/create-post.dto';
import GetPostsDto from './dto/getPosts.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  findAllWithStatus(body: GetPostsDto, status: string) {
    return this.db.findAllWithStatus(body, status);
  }
  findAllOffers(id : string) {
    return this.db.findAllOffers(id);
  }
  incrimentView(id: string) {
    return this.db.incrimentView(id);
  }

  incrimentWatching(id: string) {
    return this.db.incrimentWatching(id);
  }

  incrimentComments(id: string) {
    return this.db.incrimentComments(id);
  }

  constructor(private db : PostDatabse){}

  create(createPostDto: CreatePostDto) {
    return this.db.create(createPostDto);
  }

  findAll(body : GetPostsDto) {
    return this.db.findAll(body);
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
