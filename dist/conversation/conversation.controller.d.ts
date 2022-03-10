import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
export declare class ConversationController {
    private readonly conversationService;
    constructor(conversationService: ConversationService);
    create(createConversationDto: CreateConversationDto): Promise<any>;
    addToMessage(createConversationDto: CreateConversationDto): Promise<any>;
    findAll(): string;
    findOne(id: string): Promise<any>;
    update(id: string, updateConversationDto: UpdateConversationDto): string;
    remove(id: string): string;
}
