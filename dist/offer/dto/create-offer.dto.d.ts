import { Conversation } from "src/conversation/entities/conversation.entity";
import { Post } from "src/post/entities/post.entity";
import { UserInfo } from "src/user-info/entities/user-info.entity";
export declare class CreateOfferDto {
    message: string;
    post: Post;
    sender: UserInfo;
    reciever: UserInfo;
    conversation: Conversation;
    senderId: string;
    recieverId: string;
    postId: string;
    conversationId: string | null;
}
