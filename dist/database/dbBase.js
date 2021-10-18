"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
class DbBase {
    constructor() {
        this.prismaClient = new client_1.PrismaClient();
        common_1.Logger.log("prisma client connected");
    }
    async open() {
        this.prismaClient.$connect;
    }
    async close() {
        this.prismaClient.$disconnect;
    }
}
exports.default = DbBase;
//# sourceMappingURL=dbBase.js.map