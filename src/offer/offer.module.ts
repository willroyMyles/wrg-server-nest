import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import OfferDatabase from 'src/database/offer.database';

@Module({
  controllers: [OfferController],
  providers: [OfferService, OfferDatabase]
})
export class OfferModule {}
