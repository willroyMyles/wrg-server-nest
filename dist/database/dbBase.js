"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
class DbBase {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
        this.prismaClient.$connect();
        common_1.Logger.log("prisma client connected");
    }
}
exports.default = DbBase;
//# sourceMappingURL=dbBase.js.map