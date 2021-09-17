import { Logger } from "@nestjs/common";
import { AddToWatchRequest } from "src/user-info/dto/add-to-watch.dto";
import { CreateUserInfoDto } from "src/user-info/dto/create-user-info.dto";
import { UpdateUserInfoDto } from "src/user-info/dto/update-user-info.dto";
import DbBase from "./dbBase";

export default class UserInfoDatabase extends DbBase{
  async addToWatch(postToAdd: AddToWatchRequest) : Promise<boolean> {
    try{
        var ans;
        if(postToAdd.add)
         ans = await this.prismaClient.userInfo.update({data :{ watching : {connect : {id : postToAdd.post}}}, where : {userId : postToAdd.id}})
        else  ans = await this.prismaClient.userInfo.update({data : {watching : {disconnect : {id : postToAdd.post}}}, where : {userId : postToAdd.id}})
        return ans ? true : false;
    }catch(e){
        console.log(e);
        return null
        
    }
  }

    async create(createUserInfoDto: CreateUserInfoDto) {
        try{
            var ans = await this.prismaClient.userInfo.create({data : createUserInfoDto});
            return ans;
        }catch(e){
            Logger.log("could not create userInfo");
            return e
        }
      }
    
      async findAll() {
        try{
            var ans = await this.prismaClient.userInfo.findMany()
            return ans
        }catch(e){
            Logger.log("could not find userInfo");
            return e
        }
      }
    
      async findOne(id: string) {
        try{
            var ans = await this.prismaClient.userInfo.findUnique({where : { userId : id}, include :{watching : true}});
            return ans
        }catch(e){
            Logger.log("could not find userinfo with id "+ id);
            return e
        }
      }
    
      async update(id: string, updateUserInfoDto: UpdateUserInfoDto) {
        try{
            var ans = await this.prismaClient.userInfo.update({data : updateUserInfoDto, where : {id : id}})
            return ans
        }catch(e){
            Logger.log("could not update userinfo");
            return null
        }
      }
    
      async remove(id: string) {
        try{
            var ans = await this.prismaClient.userInfo.delete({where:{id : id.toString()}})
            return ans
        }catch(e){
            Logger.log("could not remove userinfo");
            return null
        }
      }
}