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
exports.UserInfoService = void 0;
const common_1 = require("@nestjs/common");
const userInfo_database_1 = require("../database/userInfo.database");
const create_user_info_dto_1 = require("./dto/create-user-info.dto");
let UserInfoService = class UserInfoService {
    constructor(db) {
        this.db = db;
    }
    getOtherUserInfo(id) {
        return this.db.getOtherUserInfo(id);
    }
    addToWatch(postToAdd) {
        return this.db.addToWatch(postToAdd);
    }
    create(info) {
        var data = new create_user_info_dto_1.CreateUserInfoDto();
        data.email = info.email;
        data.userId = info.userId;
        data.userImageUrl = info.userImageUrl;
        data.username = info.username;
        return this.db.create(data);
    }
    findAll() {
        return this.db.findAll();
    }
    findOne(id) {
        return this.db.findOne(id);
    }
    update(id, updateUserInfoDto) {
        return this.db.update(id, updateUserInfoDto);
    }
    remove(id) {
        return this.db.remove(id);
    }
};
UserInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userInfo_database_1.default])
], UserInfoService);
exports.UserInfoService = UserInfoService;
//# sourceMappingURL=user-info.service.js.map