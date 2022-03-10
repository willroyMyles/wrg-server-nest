"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../helper/helpers");
const create_post_dto_1 = require("../post/dto/create-post.dto");
const getPosts_dto_1 = require("../post/dto/getPosts.dto");
const update_post_dto_1 = require("../post/dto/update-post.dto");
const post_entity_1 = require("../post/entities/post.entity");
const dbBase_1 = require("./dbBase");
class PostDatabse extends dbBase_1.default {
    async findAllOffers(id) {
        try {
            var ans = await this.prismaClient.post.findMany({ include: { offers: true }, where: { userInfoId: id } });
            var offers = ans.map((e, idx, arr) => e.offers);
            return offers;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }
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
            createPostDto.offers = undefined;
            createPostDto.status = helpers_1.getStatus(createPostDto.status);
            var ans = await this.prismaClient.post.create({ data: createPostDto });
            return ans;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async findAll(body) {
        try {
            var { amount, lastId } = body;
            if (!amount)
                amount = 4;
            if (!lastId)
                var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, });
            else
                var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, skip: 1, cursor: { id: body.lastId }, });
            return ans;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }
    async findAllWithStatus(body, status) {
        try {
            var { amount, lastId } = body;
            var st = helpers_1.getStatus(status);
            if (!amount)
                amount = 4;
            if (!lastId)
                var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, where: { status: st } });
            else
                var ans = await this.prismaClient.post.findMany({ include: { UserInfo: true }, orderBy: { createdAt: "desc" }, take: amount, skip: 1, cursor: { id: body.lastId }, where: { status: st } });
            return ans;
        }
        catch (e) {
            console.log(e);
            return [];
        }
        finally {
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