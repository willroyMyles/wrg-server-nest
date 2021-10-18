import { Post } from "src/post/entities/post.entity"

export class UserInfo {
    // @Field({nullable:true})
    username :string
    // @Field({nullable:true})
    userImageUrl: string
    // @Field({nullable:true})
    userId :string
    // @Field({nullable:true})
    email: string
    // @Field({nullable:true})
    alias: string
    // @Field(()=> [Post], {nullable : false})
    // posts : Post[]
    // @Field(()=> [Post], {nullable : "items"})
    watching : Post[]
    // @Field(()=> [Conversation], {nullable : "itemsAndList"})
    // incomings : Conversation[]
    // @Field(()=> [Conversation], {nullable : "itemsAndList"})
    // outgoings : Conversation[]
}
