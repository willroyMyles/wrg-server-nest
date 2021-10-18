"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_offer_dto_1 = require("../offer/dto/create-offer.dto");
const update_offer_dto_1 = require("../offer/dto/update-offer.dto");
const dbBase_1 = require("./dbBase");
class OfferDatabase extends dbBase_1.default {
    async findAllOffersByUserId(id) {
        try {
            var res = await this.prismaClient.post.findMany({ where: { offers: { some: { id: { not: undefined } } }, userInfoId: id }, include: { offers: true, } });
            return res;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async findAllOffersByUserIdDistinct(id) {
        try {
            var res = await this.prismaClient.offer.findMany({ where: { OR: [{ reciever: { userId: id } }, { sender: { userId: id } }] }, include: { sender: true, conversation: { include: { messages: true } }, post: true }, orderBy: { postId: "desc" } });
            return res;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async create(dto) {
        try {
            var res = await this.prismaClient.offer.create({ data: {
                    message: dto.message,
                    post: { connect: { id: dto.postId } },
                    sender: { connect: { userId: dto.senderId } },
                    reciever: { connect: { userId: dto.recieverId } }
                } });
            var convo = await this.prismaClient.conversation.create({
                data: {
                    offerId: res.id,
                    messages: { create: { content: dto.message, sender: dto.senderId } },
                    offer: { connect: { id: res.id } }
                }
            });
            return res;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async findAll() {
        try {
        }
        catch (e) {
            return null;
        }
    }
    async findOne(id) {
        try {
            var res = await this.prismaClient.offer.findUnique({ where: { id: id }, include: { conversation: true, sender: true } });
            return res;
        }
        catch (e) {
            return null;
        }
    }
    async update(id, updateOfferDto) {
        try {
        }
        catch (e) {
            return null;
        }
    }
    async remove(id) {
        try {
        }
        catch (e) {
            return null;
        }
    }
}
exports.default = OfferDatabase;
//# sourceMappingURL=offer.database.js.map