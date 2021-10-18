import { Status } from ".prisma/client";
export default class GetPostsDto {
    lastId?: string;
    amount: number;
    status: Status;
}
