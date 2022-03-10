import { CreateCommentDto } from "src/comment/dto/create-comment.dto";
import { UpdateCommentDto } from "src/comment/dto/update-comment.dto";
import DbBase from "./dbBase";
export default class CommentDatabase extends DbBase {
    findOneForPost(id: string): Promise<any>;
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<any>;
    remove(id: string): Promise<any>;
}
