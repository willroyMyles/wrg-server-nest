"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_info_dto_1 = require("./create-user-info.dto");
class UpdateUserInfoDto extends mapped_types_1.PartialType(create_user_info_dto_1.CreateUserInfoDto) {
}
exports.UpdateUserInfoDto = UpdateUserInfoDto;
//# sourceMappingURL=update-user-info.dto.js.map