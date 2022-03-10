import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<boolean>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    findOneForPost(id: string): Promise<any>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<any>;
    remove(id: string): Promise<any>;
}
