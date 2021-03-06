import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
import GetPostsDto from './dto/getPosts.dto';
import internal from 'stream';
import { Status } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  async create(@Body() post: CreatePostDto, @Query("userId") userId: string, @Res() res: Response,) {

    var ans = await this.postService.create(post, userId);
    if (ans) {
      res.status(201).json(ans);
    } else res.status(500)
  }

  @Get("/posts")
  findAll(@Query("lastId") lastId: string, @Query("amount") amount: string, @Query("status") status: Status) {
    let body = new GetPostsDto();
    body.amount = Number.parseInt(amount);
    body.lastId = lastId;
    body.status = status;
    return this.postService.findAll(body);
  }

  @Post("/filter/:status")
  findAllWithStatus(@Param("status") status: string, @Body() body: GetPostsDto) {
    return this.postService.findAllWithStatus(body, status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Get("/allOffersByPost/:id")
  getOffersByPost(@Param('id') id: string) {
    return this.postService.findAllOffers(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Patch('/view/:id')
  incrimentView(@Param('id') id: string) {
    return this.postService.incrimentView(id);
  }

  // @Patch('/view/:id')
  // incrimentComments(@Param('id') id: string) {
  //   return this.postService.incrimentComments(id);
  // }

  // @Patch('/view/:id')
  // incrimentWatching(@Param('id') id: string) {
  //   return this.postService.incrimentWatching(id);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
