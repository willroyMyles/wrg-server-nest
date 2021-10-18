import ConversationDatabase from 'src/database/conversation.database';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageService {
    private db;
    findMessages(id: string): Promise<false | import(".prisma/client").Messages[]>;
    constructor(db: ConversationDatabase);
    addToConversation(id: string, createMessageDto: CreateMessageDto): Promise<boolean>;
    create(createMessageDto: CreateMessageDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMessageDto: UpdateMessageDto): string;
    remove(id: number): string;
}
