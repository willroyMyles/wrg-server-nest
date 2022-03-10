import ConversationDatabase from 'src/database/conversation.database';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageService {
    private db;
    findMessages(id: string): Promise<any>;
    constructor(db: ConversationDatabase);
    addToConversation(id: string, createMessageDto: CreateMessageDto): Promise<any>;
    create(createMessageDto: CreateMessageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMessageDto: UpdateMessageDto): string;
    remove(id: number): string;
}
