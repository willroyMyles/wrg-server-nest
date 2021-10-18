import { Injectable } from '@nestjs/common';
import OfferDatabase from 'src/database/offer.database';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OfferService {
  findAllOffersByUserId(id: string) {
    return this.db.findAllOffersByUserIdDistinct(id);
  }


  constructor(private db : OfferDatabase){}

  create(createOfferDto: CreateOfferDto) {
    return this.db.create(createOfferDto);
  }

  findAll() {
    return `This action returns all offer`;
  }

  findOne(id: string) {
    return `This action returns a #${id} offer`;
  }

  update(id: string, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: string) {
    return `This action removes a #${id} offer`;
  }
}
