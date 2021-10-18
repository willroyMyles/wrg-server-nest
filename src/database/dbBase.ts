import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
export default class DbBase {
    protected prismaClient : PrismaClient = new PrismaClient();

    constructor(){
        Logger.log("prisma client connected")
    }


    async open(){
        this.prismaClient.$connect
    }

    async close(){
        this.prismaClient.$disconnect
    }

}