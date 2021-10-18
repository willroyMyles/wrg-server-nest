import { Status } from ".prisma/client";
import { Offer } from "src/offer/entities/offer.entity";
export declare class CreatePostDto {
    id: string;
    title: string;
    content: string;
    category: string;
    make: string;
    model: string;
    year: number;
    views: number;
    offers: Offer | undefined;
    status: Status;
}
