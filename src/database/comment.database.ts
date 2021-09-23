import { CreateCommentDto } from "src/comment/dto/create-comment.dto";
import { UpdateCommentDto } from "src/comment/dto/update-comment.dto";
import DbBase from "./dbBase";

export default class CommentDatabase extends DbBase{
  async findOneForPost(id: string) {
    try{
        var ans = await this.prismaClient.comment.findMany({where : {postId : id}});
        return ans;
    }catch(e){
        console.log(e);
        return []
        
    }
  }


    async create(createCommentDto: CreateCommentDto) {
        try{
            var ans = await this.prismaClient.comment.create({data : createCommentDto});
            await this.prismaClient.post.update({data : {commentss : {increment : 1}}, where : {id : createCommentDto.postId}})
            if(ans) return true
            else return false
        }catch(e){
            console.log(e);
            
            return false;
        }
      }
    
      async findAll() {
        try{
            var ans = await this.prismaClient.comment.findMany();
            return ans
        }catch(e){
            return false;
        }
      }
    
      async findOne(id: string) {
        try{
            var ans = await this.prismaClient.comment.findUnique({where : {id : id}});
            return ans
        }catch(e){
            return false;
        }
      }
    
      async update(id: string, updateCommentDto: UpdateCommentDto) {
        try{
            var ans = await this.prismaClient.comment.update({where : {id : id}, data : updateCommentDto} );
            return ans
        }catch(e){
            return false;
        }
      }
    
      async remove(id: string) {
        try{
            var ans = await this.prismaClient.comment.delete({where : {id : id}});
            return ans
        }catch(e){
            return false;
        }
      }
}