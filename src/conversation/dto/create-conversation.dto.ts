import { Messages } from ".prisma/client"

export class CreateConversationDto {
    senderId : string
    recieverId : string
    messages : Messages[]
    commentId : string
    postId : string
}
