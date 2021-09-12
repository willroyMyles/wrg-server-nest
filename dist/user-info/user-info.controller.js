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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoController = void 0;
const common_1 = require("@nestjs/common");
const user_info_service_1 = require("./user-info.service");
const create_user_info_dto_1 = require("./dto/create-user-info.dto");
const update_user_info_dto_1 = require("./dto/update-user-info.dto");
let UserInfoController = class UserInfoController {
    constructor(userInfoService) {
        this.userInfoService = userInfoService;
    }
    create(createUserInfoDto) {
        return this.userInfoService.create(createUserInfoDto);
    }
    findAll() {
        return this.userInfoService.findAll();
    }
    findOne(id) {
        return this.userInfoService.findOne(+id);
    }
    update(id, updateUserInfoDto) {
        return this.userInfoService.update(+id, updateUserInfoDto);
    }
    remove(id) {
        return this.userInfoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_info_dto_1.CreateUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_info_dto_1.UpdateUserInfoDto]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserInfoController.prototype, "remove", null);
UserInfoController = __decorate([
    (0, common_1.Controller)('user-info'),
    __metadata("design:paramtypes", [user_info_service_1.UserInfoService])
], UserInfoController);
exports.UserInfoController = UserInfoController;
//# sourceMappingURL=user-info.controller.js.map