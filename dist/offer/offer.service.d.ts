import OfferDatabase from 'src/database/offer.database';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OfferService {
    private db;
    findAllOffersByUserId(id: string): Promise<any>;
    constructor(db: OfferDatabase);
    create(createOfferDto: CreateOfferDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOfferDto: UpdateOfferDto): string;
    remove(id: string): string;
}
