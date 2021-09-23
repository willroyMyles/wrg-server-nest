import { CreateConversationDto } from "src/conversation/dto/create-conversation.dto";
import { UpdateConversationDto } from "src/conversation/dto/update-conversation.dto";
import { CreateMessageDto } from "src/message/dto/create-message.dto";
import DbBase from "./dbBase";
export default class ConversationDatabase extends DbBase {
    findMessages(id: string): Promise<false | import(".prisma/client").Messages[]>;
    create(createConversationDto: CreateConversationDto): Promise<false | import(".prisma/client").Conversation>;
    addToConversation(id: string, createMessageDto: CreateMessageDto): Promise<boolean>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<import(".prisma/client").Conversation & {
        messages: import(".prisma/client").Messages[];
    }>;
    update(id: number, updateConversationDto: UpdateConversationDto): Promise<string>;
    remove(id: number): Promise<string>;
}
