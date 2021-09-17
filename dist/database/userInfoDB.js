"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const add_to_watch_dto_1 = require("../user-info/dto/add-to-watch.dto");
const create_user_info_dto_1 = require("../user-info/dto/create-user-info.dto");
const update_user_info_dto_1 = require("../user-info/dto/update-user-info.dto");
const dbBase_1 = require("./dbBase");
class UserInfoDatabase extends dbBase_1.default {
    async addToWatch(postToAdd) {
        try {
            var ans;
            if (postToAdd.add)
                ans = await this.prismaClient.userInfo.update({ data: { watching: { connect: { id: postToAdd.post } } }, where: { userId: postToAdd.id } });
            else
                ans = await this.prismaClient.userInfo.update({ data: { watching: { disconnect: { id: postToAdd.post } } }, where: { userId: postToAdd.id } });
            return ans;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    async create(createUserInfoDto) {
        try {
            var ans = await this.prismaClient.userInfo.create({ data: createUserInfoDto });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not create userInfo");
            return e;
        }
    }
    async findAll() {
        try {
            var ans = await this.prismaClient.userInfo.findMany();
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not find userInfo");
            return e;
        }
    }
    async findOne(id) {
        try {
            var ans = await this.prismaClient.userInfo.findUnique({ where: { userId: id }, include: { watching: true } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not find userinfo with id " + id);
            return e;
        }
    }
    async update(id, updateUserInfoDto) {
        try {
            var ans = await this.prismaClient.userInfo.update({ data: updateUserInfoDto, where: { id: id } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not update userinfo");
            return null;
        }
    }
    async remove(id) {
        try {
            var ans = await this.prismaClient.userInfo.delete({ where: { id: id.toString() } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not remove userinfo");
            return null;
        }
    }
}
exports.default = UserInfoDatabase;
//# sourceMappingURL=userInfoDB.js.map