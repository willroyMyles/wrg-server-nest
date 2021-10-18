import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(createMessageDto: CreateMessageDto): string;
    addToConversation(id: string, createMessageDto: CreateMessageDto): Promise<boolean>;
    findAll(): string;
    findMessages(id: string): Promise<false | import(".prisma/client").Messages[]>;
    update(id: string, updateMessageDto: UpdateMessageDto): string;
    remove(id: string): string;
}
