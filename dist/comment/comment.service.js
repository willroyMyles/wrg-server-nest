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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const comment_database_1 = require("../database/comment.database");
let CommentService = class CommentService {
    constructor(db) {
        this.db = db;
    }
    findOneForPost(id) {
        return this.db.findOneForPost(id);
    }
    create(createCommentDto) {
        return this.db.create(createCommentDto);
    }
    findAll() {
        return this.db.findAll();
    }
    findOne(id) {
        return this.db.findOne(id);
    }
    update(id, updateCommentDto) {
        return this.db.update(id, updateCommentDto);
    }
    remove(id) {
        return this.db.remove(id);
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [comment_database_1.default])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map