"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_user_info_dto_1 = require("../user-info/dto/create-user-info.dto");
const update_user_info_dto_1 = require("../user-info/dto/update-user-info.dto");
const dbBase_1 = require("./dbBase");
class UserInfoDatabase extends dbBase_1.default {
    async create(createUserInfoDto) {
        try {
            var ans = await this.prismaClient.userInfo.create({ data: createUserInfoDto });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not ");
            return null;
        }
    }
    async findAll() {
        try {
            var ans = await this.prismaClient.userInfo.findMany();
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not ");
            return null;
        }
    }
    async findOne(id) {
        try {
            var ans = await this.prismaClient.userInfo.findUnique({ where: { id: id.toString() } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not ");
            return null;
        }
    }
    async update(id, updateUserInfoDto) {
        try {
            var ans = await this.prismaClient.userInfo.update({ data: updateUserInfoDto, where: { id: isFinite.toString() } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not ");
            return null;
        }
    }
    async remove(id) {
        try {
            var ans = await this.prismaClient.userInfo.delete({ where: { id: id.toString() } });
            return ans;
        }
        catch (e) {
            common_1.Logger.log("could not ");
            return null;
        }
    }
}
exports.default = UserInfoDatabase;
//# sourceMappingURL=userInfoDB.js.map