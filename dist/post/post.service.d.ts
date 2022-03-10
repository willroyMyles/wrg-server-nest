import PostDatabse from 'src/database/post.database';
import { CreatePostDto } from './dto/create-post.dto';
import GetPostsDto from './dto/getPosts.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private db;
    findAllWithStatus(body: GetPostsDto, status: string): Promise<any>;
    findAllOffers(id: string): Promise<any>;
    incrimentView(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    constructor(db: PostDatabse);
    create(createPostDto: CreatePostDto): Promise<any>;
    findAll(body: GetPostsDto): Promise<any>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
