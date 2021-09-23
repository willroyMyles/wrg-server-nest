import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<false | import(".prisma/client").Comment[]>;
    findOne(id: string): Promise<false | import(".prisma/client").Comment>;
    findOneForPost(id: string): Promise<import(".prisma/client").Comment[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<false | import(".prisma/client").Comment>;
    remove(id: string): Promise<false | import(".prisma/client").Comment>;
}
