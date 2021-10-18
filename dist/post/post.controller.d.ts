import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
import GetPostsDto from './dto/getPosts.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(post: CreatePostDto, res: Response): Promise<void>;
    findAll(body: GetPostsDto): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findAllWithStatus(status: string, body: GetPostsDto): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findOne(id: string): string;
    getOffersByPost(id: string): Promise<import(".prisma/client").Offer[][]>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    incrimentView(id: string): Promise<boolean>;
    remove(id: string): string;
}
