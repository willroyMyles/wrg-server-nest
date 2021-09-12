import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
export default class DbBase {
    protected prismaClient : PrismaClient = new PrismaClient();

    constructor(){
        this.prismaClient.$connect();
        Logger.log("prisma client connected")
    }
}