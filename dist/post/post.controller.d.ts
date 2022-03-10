import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';
import GetPostsDto from './dto/getPosts.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(post: CreatePostDto, res: Response): Promise<void>;
    findAll(body: GetPostsDto): Promise<any>;
    findAllWithStatus(status: string, body: GetPostsDto): Promise<any>;
    findOne(id: string): string;
    getOffersByPost(id: string): Promise<any>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    incrimentView(id: string): Promise<boolean>;
    remove(id: string): string;
}
