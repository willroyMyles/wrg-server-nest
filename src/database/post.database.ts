import { Status } from ".prisma/client";
import { getStatus } from "src/helper/helpers";
import { CreatePostDto } from "src/post/dto/create-post.dto";
import GetPostsDto from "src/post/dto/getPosts.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import { Post } from "src/post/entities/post.entity";
import DbBase from "./dbBase";

export default class PostDatabse extends DbBase {

  async findAllOffers(id: string) {
    try {
      var ans = await this.prismaClient.post.findMany({ include: { offers: true }, where: { userInfoId: id } });
      var offers = ans.map((e, idx, arr) => e.offers);
      return offers;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async incrimentView(id: string) {
    try {
      var ans = await this.prismaClient.post.update({ data: { views: { increment: 1 } }, where: { id: id } });
      if (ans) return true
      return false
    } catch (e) {
      return false;
    }
  }

  async incrimentWatching(id: string) {
    try {
      var ans = await this.prismaClient.post.update({ data: { watching: { increment: 1 } }, where: { id: id } });
      if (ans) return true
      return false
    } catch (e) {
      return false;
    }
  }

  async incrimentComments(id: string) {
    try {
      var ans = await this.prismaClient.post.update({ data: { commentss: { increment: 1 } }, where: { id: id } });
      if (ans) return true
      return false
    } catch (e) {
      return false;
    }
  }



  async create(createPostDto: CreatePostDto, userId?: string) {
    try {
      createPostDto.offers = undefined;
      createPostDto.status = getStatus(createPostDto.status);
      var ans = await this.prismaClient.post.create({
        data: {
          ...createPostDto,
          userInfoId: userId
        }
      });
      return ans;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async findAll(body: GetPostsDto) {
    try {
      var { amount, lastId } = body;
      if (!amount) amount = 4;
      if (!lastId)
        var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, });
      else
        var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, skip: 1, cursor: { id: body.lastId }, });

      return ans;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async findAllWithStatus(body: GetPostsDto, status: string) {
    try {
      var { amount, lastId } = body;
      var st = getStatus(status);
      if (!amount) amount = 4;
      if (!lastId)
        var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, where: { status: st } });
      else
        var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, skip: 1, cursor: { id: body.lastId }, where: { status: st } });

      return ans;
    } catch (e) {
      console.log(e);
      return [];
    } finally {


    }
  }

  async findOne(id: number) {
    try {

    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {

    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async remove(id: number) {
    try {

    } catch (e) {
      console.log(e);
      return null;
    }
  }
}