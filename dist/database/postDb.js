"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_post_dto_1 = require("../post/dto/create-post.dto");
const update_post_dto_1 = require("../post/dto/update-post.dto");
const post_entity_1 = require("../post/entities/post.entity");
const dbBase_1 = require("./dbBase");
class PostDatabse extends dbBase_1.default {
    async create(createPostDto) {
        try {
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
//# sourceMappingURL=postDb.js.map