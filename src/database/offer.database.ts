import { CreateOfferDto } from "src/offer/dto/create-offer.dto";
import { UpdateOfferDto } from "src/offer/dto/update-offer.dto";
import DbBase from "./dbBase"

export default class OfferDatabase extends DbBase {
    async findAllOffersByUserId(id: string) {
      try{
        var res = await this.prismaClient.post.findMany({where : {offers : {some : {id : {not : undefined}}}, userInfoId : id }, include:{offers:true, } })
        return res;
      }catch(e){
          console.log(e);
          return null;
      }
    }

    async findAllOffersByUserIdDistinct(id: string) {
        try{
            // var res = await this.prismaClient.offer.groupBy({
            //     by : ["postId"],
            //     where : {post : {userInfoId : id}},
                
            // });
          var res = await this.prismaClient.offer.findMany({where : {OR : [ {reciever : {userId : id}}, {sender : {userId: id}}]}, include:{sender : true, conversation : {include:{messages : true}}, post : true}, orderBy : {postId:"desc"}})
          return res;
        }catch(e){
            console.log(e);
            return null;
        }
      }
    async create(dto: CreateOfferDto) {
        try {
            var res = await this.prismaClient.offer.create({data : {
                message : dto.message,
                post : {connect : {id : dto.postId}},
                sender : {connect :{userId : dto.senderId }},
reciever : {connect : { userId : dto.recieverId}}

            }})
            // create converstation
            var convo = await this.prismaClient.conversation.create({
                data:{
                    offerId : res.id,

                    messages : {create : {content : dto.message,sender : dto.senderId}},
                    offer : {connect:{id:res.id}}
                }
            })
            return res;
        } catch (e) {
            console.log(e);
            
            return null;
        }
    }

    async findAll() {
        try {

        } catch (e) {
            return null;
        }
    }

    async findOne(id: string) {
        try {
            var res = await this.prismaClient.offer.findUnique({ where: { id: id }, include: { conversation: true, sender: true } });
            return res;
        } catch (e) {
            return null;
        }
    }

    async update(id: string, updateOfferDto: UpdateOfferDto) {
        try {

        } catch (e) {
            return null;
        }
    }

    async remove(id: string) {
        try {

        } catch (e) {
            return null;
        }
    }
}