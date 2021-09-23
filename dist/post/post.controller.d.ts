import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(post: CreatePostDto, res: Response): Promise<void>;
    findAll(): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findOne(id: string): string;
    update(id: string, updatePostDto: UpdatePostDto): string;
    incrimentView(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    remove(id: string): string;
}
