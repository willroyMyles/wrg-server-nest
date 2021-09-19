import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() post: CreatePostDto, @Res() res : Response) {

    var ans = await  this.postService.create(post);
    if(ans){
      res.status(201).json(ans);
    }else res.status(500)
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Patch('/view/:id')
  incrimentView(@Param('id') id: string) {
    return this.postService.incrimentView(id);
  }

  @Patch('/view/:id')
  incrimentComments(@Param('id') id: string) {
    return this.postService.incrimentComments(id);
  }

  @Patch('/view/:id')
  incrimentWatching(@Param('id') id: string) {
    return this.postService.incrimentWatching(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
