import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationController {
    private readonly conversationService;
    constructor(conversationService: ConversationService);
    create(createConversationDto: CreateConversationDto): Promise<false | import(".prisma/client").Conversation>;
    addToMessage(createConversationDto: CreateConversationDto): Promise<false | import(".prisma/client").Conversation>;
    findAll(): string;
    findOne(id: string): Promise<false | (import(".prisma/client").Conversation & {
        _count: import(".prisma/client").Prisma.ConversationCountOutputType;
        messages: import(".prisma/client").Messages[];
    })>;
    update(id: string, updateConversationDto: UpdateConversationDto): string;
    remove(id: string): string;
}
