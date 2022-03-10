import CommentDatabase from 'src/database/comment.database';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentService {
    private db;
    findOneForPost(id: string): Promise<any>;
    constructor(db: CommentDatabase);
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<any>;
    remove(id: string): Promise<any>;
}
