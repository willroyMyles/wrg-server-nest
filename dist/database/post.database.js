"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_post_dto_1 = require("../post/dto/create-post.dto");
const update_post_dto_1 = require("../post/dto/update-post.dto");
const post_entity_1 = require("../post/entities/post.entity");
const dbBase_1 = require("./dbBase");
class PostDatabse extends dbBase_1.default {
    async incrimentView(id) {
        try {
            var ans = await this.prismaClient.post.update({ data: { views: { increment: 1 } }, where: { id: id } });
            if (ans)
                return true;
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async incrimentWatching(id) {
        try {
            var ans = await this.prismaClient.post.update({ data: { watching: { increment: 1 } }, where: { id: id } });
            if (ans)
                return true;
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async incrimentComments(id) {
        try {
            var ans = await this.prismaClient.post.update({ data: { commentss: { increment: 1 } }, where: { id: id } });
            if (ans)
                return true;
            return false;
        }
        catch (e) {
            return false;
        }
    }
    async create(createPostDto) {
        try {
            var ans = await this.prismaClient.post.create({ data: createPostDto });
            return ans;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async findAll() {
        try {
            var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true } });
            return ans;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }
    async findOne(id) {
        try {
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async update(id, updatePostDto) {
        try {
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async remove(id) {
        try {
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}
exports.default = PostDatabse;
//# sourceMappingURL=post.database.js.map