import { PrismaClient } from "@prisma/client";
export default class DbBase {
    protected prismaClient: PrismaClient;
    constructor();
}
