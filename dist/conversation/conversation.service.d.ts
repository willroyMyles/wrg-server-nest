import ConversationDatabase from 'src/database/conversation.database';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationService {
    private db;
    constructor(db: ConversationDatabase);
    create(createConversationDto: CreateConversationDto): Promise<false | import(".prisma/client").Conversation>;
    findAll(): string;
    findOne(id: string): Promise<false | (import(".prisma/client").Conversation & {
        _count: import(".prisma/client").Prisma.ConversationCountOutputType;
        messages: import(".prisma/client").Messages[];
    })>;
    update(id: number, updateConversationDto: UpdateConversationDto): string;
    remove(id: number): string;
}
