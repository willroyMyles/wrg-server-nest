"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfferDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_offer_dto_1 = require("./create-offer.dto");
class UpdateOfferDto extends mapped_types_1.PartialType(create_offer_dto_1.CreateOfferDto) {
}
exports.UpdateOfferDto = UpdateOfferDto;
//# sourceMappingURL=update-offer.dto.js.map