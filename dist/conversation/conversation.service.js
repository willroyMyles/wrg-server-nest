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
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const conversation_database_1 = require("../database/conversation.database");
let ConversationService = class ConversationService {
    constructor(db) {
        this.db = db;
    }
    create(createConversationDto) {
        return this.db.create(createConversationDto);
    }
    findAll() {
        return `This action returns all conversation`;
    }
    findOne(id) {
        return this.db.findOne(id);
    }
    update(id, updateConversationDto) {
        return `This action updates a #${id} conversation`;
    }
    remove(id) {
        return `This action removes a #${id} conversation`;
    }
};
ConversationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [conversation_database_1.default])
], ConversationService);
exports.ConversationService = ConversationService;
//# sourceMappingURL=conversation.service.js.map