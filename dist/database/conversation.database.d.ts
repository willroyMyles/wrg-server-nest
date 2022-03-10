import { CreateConversationDto } from "src/conversation/dto/create-conversation.dto";
import { UpdateConversationDto } from "src/conversation/dto/update-conversation.dto";
import { CreateMessageDto } from "src/message/dto/create-message.dto";
import DbBase from "./dbBase";
export default class ConversationDatabase extends DbBase {
    findMessages(id: string): Promise<any>;
    create(createConversationDto: CreateConversationDto): Promise<any>;
    addToConversation(id: string, createMessageDto: CreateMessageDto): Promise<any>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<any>;
    update(id: number, updateConversationDto: UpdateConversationDto): Promise<string>;
    remove(id: number): Promise<string>;
}
