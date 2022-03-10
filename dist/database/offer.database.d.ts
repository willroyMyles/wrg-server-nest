import { CreateOfferDto } from "src/offer/dto/create-offer.dto";
import { UpdateOfferDto } from "src/offer/dto/update-offer.dto";
import DbBase from "./dbBase";
export default class OfferDatabase extends DbBase {
    findAllOffersByUserId(id: string): Promise<any>;
    findAllOffersByUserIdDistinct(id: string): Promise<any>;
    create(dto: CreateOfferDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateOfferDto: UpdateOfferDto): Promise<any>;
    remove(id: string): Promise<any>;
}
