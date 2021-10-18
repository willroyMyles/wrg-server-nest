"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferService = void 0;
const common_1 = require("@nestjs/common");
const offer_database_1 = require("../database/offer.database");
let OfferService = class OfferService {
    constructor(db) {
        this.db = db;
    }
    findAllOffersByUserId(id) {
        return this.db.findAllOffersByUserIdDistinct(id);
    }
    create(createOfferDto) {
        return this.db.create(createOfferDto);
    }
    findAll() {
        return `This action returns all offer`;
    }
    findOne(id) {
        return `This action returns a #${id} offer`;
    }
    update(id, updateOfferDto) {
        return `This action updates a #${id} offer`;
    }
    remove(id) {
        return `This action removes a #${id} offer`;
    }
};
OfferService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [offer_database_1.default])
], OfferService);
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map