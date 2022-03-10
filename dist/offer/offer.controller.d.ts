import { OfferService } from './offer.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OfferController {
    private readonly offerService;
    constructor(offerService: OfferService);
    create(createOfferDto: CreateOfferDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    findAllOffersByUserId(id: string): Promise<any>;
    update(id: string, updateOfferDto: UpdateOfferDto): string;
    remove(id: string): string;
}
