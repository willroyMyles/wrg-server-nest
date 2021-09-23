"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_conversation_dto_1 = require("../conversation/dto/create-conversation.dto");
const update_conversation_dto_1 = require("../conversation/dto/update-conversation.dto");
const create_message_dto_1 = require("../message/dto/create-message.dto");
const dbBase_1 = require("./dbBase");
class ConversationDatabase extends dbBase_1.default {
    async findMessages(id) {
        try {
            var res = await this.prismaClient.conversation.findUnique({ where: { id: id }, include: { messages: true } });
            return res.messages;
        }
        catch (e) {
            return false;
        }
    }
    async create(createConversationDto) {
        try {
            var res = await this.prismaClient.conversation.create({ data: {
                    reciever: { connect: { userId: createConversationDto.recieverId } },
                    sender: { connect: { userId: createConversationDto.senderId } },
                    newMessage: createConversationDto.recieverId,
                    messages: { create: createConversationDto.messages[0] },
                    comment: { connect: { id: createConversationDto.commentId } },
                    post: { connect: { id: createConversationDto.postId } },
                    userInfoId: createConversationDto.senderId
                } });
            return res;
        }
        catch (e) {
            return false;
        }
    }
    async addToConversation(id, createMessageDto) {
        try {
            var res = await this.prismaClient.conversation.update({ where: { id: id }, data: { messages: { create: createMessageDto } } });
            if (res)
                return true;
        }
        catch (e) {
            return false;
        }
    }
    async findAll() {
        return `This action returns all conversation`;
    }
    async findOne(id) {
        return this.prismaClient.conversation.findUnique({ where: { id: id }, include: { messages: true } });
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