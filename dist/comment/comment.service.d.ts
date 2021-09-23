import CommentDatabase from 'src/database/comment.database';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentService {
    private db;
    findOneForPost(id: string): Promise<import(".prisma/client").Comment[]>;
    constructor(db: CommentDatabase);
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<false | import(".prisma/client").Comment[]>;
    findOne(id: string): Promise<false | import(".prisma/client").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<false | import(".prisma/client").Comment>;
    remove(id: string): Promise<false | import(".prisma/client").Comment>;
}
