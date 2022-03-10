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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoController = void 0;
const common_1 = require("@nestjs/common");
const user_info_service_1 = require("./user-info.service");
const create_user_info_dto_1 = require("./dto/create-user-info.dto");
const update_user_info_dto_1 = require("./dto/update-user-info.dto");
const add_to_watch_dto_1 = require("./dto/add-to-watch.dto");
const express_1 = require("express");
let UserInfoController = class UserInfoController {
    constructor(userInfoService) {
        this.userInfoService = userInfoService;
    }
    create(createUserInfoDto) {
        return this.userInfoService.create(createUserInfoDto);
    }
    async modifyWatch(postToAdd, res) {
        var ans = await this.userInfoService.addToWatch(postToAdd);
        if (ans)
            res.status(200).send();
        else
            res.status(500).send();
    }
    findAll() {
        return this.userInfoService.findAll();
    }
    async getOtherUserInfo(id) {
        return this.userInfoService.getOtherUserInfo(id);
    }
    async findOne(id, res) {
        try {
            var ans = await this.userInfoService.findOne(id);
            if (ans)
                res.status(common_1.HttpStatus.OK).json(ans);
            else
                res.status(common_1.HttpStatus.NOT_FOUND).json(ans);
        }
        catch (e) {
            return res.status(common_1.HttpStatus.NOT_FOUND).send();
        }
    }
    update(id, updateUserInfoDto) {
        return this.userInfoService.update(id, updateUserInfoDto);
    }
    remove(id) {
        return this.userInfoService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_info_dto_1.CreateUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "create", null);
__decorate([
    common_1.Post("/watching"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_to_watch_dto_1.AddToWatchRequest, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "modifyWatch", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "findAll", null);
__decorate([
    common_1.Get("/other/:id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "getOtherUserInfo", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_info_dto_1.UpdateUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "remove", null);
UserInfoController = __decorate([
    common_1.Controller('user-info'),
    __metadata("design:paramtypes", [user_info_service_1.UserInfoService])
], UserInfoController);
exports.UserInfoController = UserInfoController;
//# sourceMappingURL=user-info.controller.js.map