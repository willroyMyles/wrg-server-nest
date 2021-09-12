import { Logger } from "@nestjs/common";
import { CreateUserInfoDto } from "src/user-info/dto/create-user-info.dto";
import { UpdateUserInfoDto } from "src/user-info/dto/update-user-info.dto";
import DbBase from "./dbBase";

export default class UserInfoDatabase extends DbBase{

    async create(createUserInfoDto: CreateUserInfoDto) {
        try{
            var ans = await this.prismaClient.userInfo.create({data : createUserInfoDto});
            return ans;
        }catch(e){
            Logger.log("could not ");
            return null
        }
      }
    
      async findAll() {
        try{
            var ans = await this.prismaClient.userInfo.findMany()
            return ans
        }catch(e){
            Logger.log("could not ");
            return null
        }
      }
    
      async findOne(id: number) {
        try{
            var ans = await this.prismaClient.userInfo.findUnique({where : { id : id.toString()}});
            return ans
        }catch(e){
            Logger.log("could not ");
            return null
        }
      }
    
      async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
        try{
            var ans = await this.prismaClient.userInfo.update({data : updateUserInfoDto, where : {id : isFinite.toString()}})
            return ans
        }catch(e){
            Logger.log("could not ");
            return null
        }
      }
    
      async remove(id: number) {
        try{
            var ans = await this.prismaClient.userInfo.delete({where:{id : id.toString()}})
            return ans
        }catch(e){
            Logger.log("could not ");
            return null
        }
      }
}