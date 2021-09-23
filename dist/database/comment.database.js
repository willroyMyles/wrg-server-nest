"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_comment_dto_1 = require("../comment/dto/create-comment.dto");
const update_comment_dto_1 = require("../comment/dto/update-comment.dto");
const dbBase_1 = require("./dbBase");
class CommentDatabase extends dbBase_1.default {
    async findOneForPost(id) {
        try {
            var ans = await this.prismaClient.comment.findMany({ where: { postId: id } });
            return ans;
        }
        catch (e) {
            console.log(e);
            return [];
        }
    }
    async create(createCommentDto) {
        try {
            var ans = await this.prismaClient.comment.create({ data: createCommentDto });
            await this.prismaClient.post.update({ data: { commentss: { increment: 1 } }, where: { id: createCommentDto.postId } });
            if (ans)
                return true;
            else
                return false;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    async findAll() {
        try {
            var ans = await this.prismaClient.comment.findMany();
            return ans;
        }
        catch (e) {
            return false;
        }
    }
    async findOne(id) {
        try {
            var ans = await this.prismaClient.comment.findUnique({ where: { id: id } });
            return ans;
        }
        catch (e) {
            return false;
        }
    }
    async update(id, updateCommentDto) {
        try {
            var ans = await this.prismaClient.comment.update({ where: { id: id }, data: updateCommentDto });
            return ans;
        }
        catch (e) {
            return false;
        }
    }
    async remove(id) {
        try {
            var ans = await this.prismaClient.comment.delete({ where: { id: id } });
            return ans;
        }
        catch (e) {
            return false;
        }
    }
}
exports.default = CommentDatabase;
//# sourceMappingURL=comment.database.js.map