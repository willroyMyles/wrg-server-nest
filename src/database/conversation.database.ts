import { CreateConversationDto } from "src/conversation/dto/create-conversation.dto";
import { UpdateConversationDto } from "src/conversation/dto/update-conversation.dto";
import { CreateMessageDto } from "src/message/dto/create-message.dto";
import DbBase from "./dbBase";

export default class ConversationDatabase extends DbBase{
  async findMessages(id: string) {
    this.open();
   try{
      var res = await this.prismaClient.conversation.findUnique({where : {id : id}, include : {messages : true}});
      return res.messages;
   }catch(e){
      return false;
   }finally{
     this.close();
   }
  }


  async create(createConversationDto: CreateConversationDto) {
    try{
        var res = await this.prismaClient.conversation.create({data : {
          offerId : createConversationDto.offerId,
          messages : {create  : createConversationDto.messages[0]},
        }});
        return res
    }catch(e){
        return false;
    }
  }

  async addToConversation(id : string, createMessageDto: CreateMessageDto) {
    try{
      
        var res = await this.prismaClient.conversation.update({where : {id : id}, data : {messages : {create :  createMessageDto}}, include : {messages : true}})
        if(res) return res.messages[res.messages.length -1 ];
    }catch(e){
        return false;
    }
  }

      async findAll() {
        return `This action returns all conversation`;
      }
    
      async findOne(id: string) {
        this.open();
        try{
          var ans =  await this.prismaClient.conversation.findUnique({where : {id : id}, include : {messages:true, _count : true}});
        return ans;
        }
        catch(e){
          return false;
        }finally{
          this.close();
        }
      }
    
     async update(id: number, updateConversationDto: UpdateConversationDto) {
        return `This action updates a #${id} conversation`;
      }
    
      async remove(id: number) {
        return `This action removes a #${id} conversation`;
      }
}