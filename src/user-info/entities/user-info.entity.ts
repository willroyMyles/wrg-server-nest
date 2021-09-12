import { Post } from "src/post/entities/post.entity"

export class UserInfo {
    // @Field({nullable:true})
    username :String
    // @Field({nullable:true})
    userImageUrl: String
    // @Field({nullable:true})
    userId :String
    // @Field({nullable:true})
    email: String
    // @Field({nullable:true})
    alias: String
    // @Field(()=> [Post], {nullable : false})
    // posts : Post[]
    // @Field(()=> [Post], {nullable : "items"})
    // watching : Post[]
    // @Field(()=> [Conversation], {nullable : "itemsAndList"})
    // incomings : Conversation[]
    // @Field(()=> [Conversation], {nullable : "itemsAndList"})
    // outgoings : Conversation[]
}
