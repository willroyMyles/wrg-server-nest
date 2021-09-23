import { CreateConversationDto } from "src/conversation/dto/create-conversation.dto";
import { UpdateConversationDto } from "src/conversation/dto/update-conversation.dto";
import { CreateMessageDto } from "src/message/dto/create-message.dto";
import DbBase from "./dbBase";

export default class ConversationDatabase extends DbBase{
  async findMessages(id: string) {
   try{
      var res = await this.prismaClient.conversation.findUnique({where : {id : id}, include : {messages : true}});
      return res.messages;
   }catch(e){
      return false;
   }
  }


  async create(createConversationDto: CreateConversationDto) {
    try{
        var res = await this.prismaClient.conversation.create({data : {
          reciever : {connect : {userId : createConversationDto.recieverId}},
          sender : {connect : {userId : createConversationDto.senderId}},
          newMessage : createConversationDto.recieverId,
          messages : {create  : createConversationDto.messages[0]},
          comment : {connect : {id : createConversationDto.commentId}},
          post : {connect : {id : createConversationDto.postId}},
          userInfoId : createConversationDto.senderId
          
        }});
        return res
    }catch(e){
        return false;
    }
  }

  async addToConversation(id : string, createMessageDto: CreateMessageDto) {
    try{
        var res = await this.prismaClient.conversation.update({where : {id : id}, data : {messages : {create :  createMessageDto}}})
        if(res) return true;
    }catch(e){
        return false;
    }
  }

      async findAll() {
        return `This action returns all conversation`;
      }
    
      async findOne(id: string) {
        return this.prismaClient.conversation.findUnique({where : {id : id}, include : {messages:true}});
      }
    
     async update(id: number, updateConversationDto: UpdateConversationDto) {
        return `This action updates a #${id} conversation`;
      }
    
      async remove(id: number) {
        return `This action removes a #${id} conversation`;
      }
}