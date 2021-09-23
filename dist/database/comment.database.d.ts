import { CreateCommentDto } from "src/comment/dto/create-comment.dto";
import { UpdateCommentDto } from "src/comment/dto/update-comment.dto";
import DbBase from "./dbBase";
export default class CommentDatabase extends DbBase {
    findOneForPost(id: string): Promise<import(".prisma/client").Comment[]>;
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<false | import(".prisma/client").Comment[]>;
    findOne(id: string): Promise<false | import(".prisma/client").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<false | import(".prisma/client").Comment>;
    remove(id: string): Promise<false | import(".prisma/client").Comment>;
}
