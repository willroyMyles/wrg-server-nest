import { CreatePostDto } from "src/post/dto/create-post.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import { Post } from "src/post/entities/post.entity";
import DbBase from "./dbBase";

export default class PostDatabse extends DbBase{


    async create(createPostDto: CreatePostDto) {
        try{
            var ans = await this.prismaClient.post.create({data : createPostDto});
            return ans;
        }catch(e){
            console.log(e);
            return null;
        }
      }
    
      async findAll() {
        try{
            var ans = await this.prismaClient.post.findMany({include : {UserInfo : true}});
            return ans;
        }catch(e){
            console.log(e);
            return []; 
        }
      }
    
     async findOne(id: number) {
        try{

        }catch(e){
            console.log(e);
            return null; 
        }
      }
    
      async update(id: number, updatePostDto: UpdatePostDto) {
        try{

        }catch(e){
            console.log(e);
            return null; 
        }
      }
    
      async remove(id: number) {
        try{

        }catch(e){
            console.log(e);
            return null; 
        }
      }
}