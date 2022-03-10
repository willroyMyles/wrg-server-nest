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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const conversation_database_1 = require("../database/conversation.database");
let MessageService = class MessageService {
    constructor(db) {
        this.db = db;
    }
    findMessages(id) {
        return this.db.findMessages(id);
    }
    addToConversation(id, createMessageDto) {
        createMessageDto.id = undefined;
        return this.db.addToConversation(id, createMessageDto);
    }
    create(createMessageDto) {
        return 'This action adds a new message';
    }
    findAll() {
        return `This action returns all message`;
    }
    findOne(id) {
        return `This action returns a #${id} message`;
    }
    update(id, updateMessageDto) {
        return `This action updates a #${id} message`;
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [conversation_database_1.default])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map