import ConversationDatabase from 'src/database/conversation.database';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationService {
    private db;
    constructor(db: ConversationDatabase);
    create(createConversationDto: CreateConversationDto): Promise<any>;
    findAll(): string;
    findOne(id: string): Promise<any>;
    update(id: number, updateConversationDto: UpdateConversationDto): string;
    remove(id: number): string;
}
