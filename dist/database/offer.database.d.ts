import { CreateOfferDto } from "src/offer/dto/create-offer.dto";
import { UpdateOfferDto } from "src/offer/dto/update-offer.dto";
import DbBase from "./dbBase";
export default class OfferDatabase extends DbBase {
    findAllOffersByUserId(id: string): Promise<(import(".prisma/client").Post & {
        offers: import(".prisma/client").Offer[];
    })[]>;
    findAllOffersByUserIdDistinct(id: string): Promise<(import(".prisma/client").Offer & {
        post: import(".prisma/client").Post;
        sender: import(".prisma/client").UserInfo;
        conversation: import(".prisma/client").Conversation & {
            messages: import(".prisma/client").Messages[];
        };
    })[]>;
    create(dto: CreateOfferDto): Promise<import(".prisma/client").Offer>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<import(".prisma/client").Offer & {
        sender: import(".prisma/client").UserInfo;
        conversation: import(".prisma/client").Conversation;
    }>;
    update(id: string, updateOfferDto: UpdateOfferDto): Promise<any>;
    remove(id: string): Promise<any>;
}
