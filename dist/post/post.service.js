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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_database_1 = require("../database/post.database");
let PostService = class PostService {
    constructor(db) {
        this.db = db;
    }
    findAllWithStatus(body, status) {
        return this.db.findAllWithStatus(body, status);
    }
    findAllOffers(id) {
        return this.db.findAllOffers(id);
    }
    incrimentView(id) {
        return this.db.incrimentView(id);
    }
    incrimentWatching(id) {
        return this.db.incrimentWatching(id);
    }
    incrimentComments(id) {
        return this.db.incrimentComments(id);
    }
    create(createPostDto) {
        return this.db.create(createPostDto);
    }
    findAll(body) {
        return this.db.findAll(body);
    }
    findOne(id) {
        return `This action returns a #${id} post`;
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_database_1.default])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map