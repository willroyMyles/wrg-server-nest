import { PrismaClient } from "@prisma/client";

export class Question {
    id: string
    content: string
    postId: string
    userInfoId: string
    answerId?: string
}
