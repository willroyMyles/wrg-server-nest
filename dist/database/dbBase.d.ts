import { PrismaClient } from "@prisma/client";
export default class DbBase {
    protected prismaClient: PrismaClient;
    constructor();
    open(): Promise<void>;
    close(): Promise<void>;
}
