import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { AddToWatchRequest } from './dto/add-to-watch.dto';
import { Response } from 'express';

@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post()
  create(@Body() createUserInfoDto: CreateUserInfoDto) {
    return this.userInfoService.create(createUserInfoDto);
  }

  @Post("/watching")
  async modifyWatch(@Body() postToAdd : AddToWatchRequest, @Res() res: Response){
    var ans = await  this.userInfoService.addToWatch(postToAdd);
    if(ans) res.status(200).send()
    else res.status(500).send()
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }

  @Get("/other/:id")
  async getOtherUserInfo(@Param("id") id : string){
    return this.userInfoService.getOtherUserInfo(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res : Response) {
    try{
      var ans = await this.userInfoService.findOne(id);
      if(ans) res.status(HttpStatus.OK).json(ans)
      else res.status(HttpStatus.NOT_FOUND).json(ans);


    }catch(e){
      return res.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInfoDto: UpdateUserInfoDto) {
    return this.userInfoService.update(id, updateUserInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInfoService.remove(id);
  }
}
