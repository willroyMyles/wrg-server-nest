import OfferDatabase from 'src/database/offer.database';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OfferService {
    private db;
    findAllOffersByUserId(id: string): Promise<(import(".prisma/client").Offer & {
        post: import(".prisma/client").Post;
        sender: import(".prisma/client").UserInfo;
        conversation: import(".prisma/client").Conversation & {
            messages: import(".prisma/client").Messages[];
        };
    })[]>;
    constructor(db: OfferDatabase);
    create(createOfferDto: CreateOfferDto): Promise<import(".prisma/client").Offer>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOfferDto: UpdateOfferDto): string;
    remove(id: string): string;
}
