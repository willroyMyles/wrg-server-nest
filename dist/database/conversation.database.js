"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_conversation_dto_1 = require("../conversation/dto/create-conversation.dto");
const update_conversation_dto_1 = require("../conversation/dto/update-conversation.dto");
const create_message_dto_1 = require("../message/dto/create-message.dto");
const dbBase_1 = require("./dbBase");
class ConversationDatabase extends dbBase_1.default {
    async findMessages(id) {
        this.open();
        try {
            var res = await this.prismaClient.conversation.findUnique({ where: { id: id }, include: { messages: true } });
            return res.messages;
        }
        catch (e) {
            return false;
        }
        finally {
            this.close();
        }
    }
    async create(createConversationDto) {
        try {
            var res = await this.prismaClient.conversation.create({ data: {
                    offerId: createConversationDto.offerId,
                    messages: { create: createConversationDto.messages[0] },
                } });
            return res;
        }
        catch (e) {
            return false;
        }
    }
    async addToConversation(id, createMessageDto) {
        try {
            var res = await this.prismaClient.conversation.update({ where: { id: id }, data: { messages: { create: createMessageDto } }, include: { messages: true } });
            if (res)
                return res.messages[res.messages.length - 1];
        }
        catch (e) {
            return false;
        }
    }
    async findAll() {
        return `This action returns all conversation`;
    }
    async findOne(id) {
        this.open();
        try {
            var ans = await this.prismaClient.conversation.findUnique({ where: { id: id }, include: { messages: true, _count: true } });
            return ans;
        }
        catch (e) {
            return false;
        }
        finally {
            this.close();
        }
    }
    async update(id, updateConversationDto) {
        return `This action updates a #${id} conversation`;
    }
    async remove(id) {
        return `This action removes a #${id} conversation`;
    }
}
exports.default = ConversationDatabase;
//# sourceMappingURL=conversation.database.js.map