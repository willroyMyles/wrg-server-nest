import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OfferController {
    private readonly offerService;
    constructor(offerService: OfferService);
    create(createOfferDto: CreateOfferDto): Promise<import(".prisma/client").Offer>;
    findAll(): string;
    findOne(id: string): string;
    findAllOffersByUserId(id: string): Promise<(import(".prisma/client").Offer & {
        post: import(".prisma/client").Post;
        sender: import(".prisma/client").UserInfo;
        conversation: import(".prisma/client").Conversation & {
            messages: import(".prisma/client").Messages[];
        };
    })[]>;
    update(id: string, updateOfferDto: UpdateOfferDto): string;
    remove(id: string): string;
}
