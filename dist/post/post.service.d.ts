import PostDatabse from 'src/database/post.database';
import { CreatePostDto } from './dto/create-post.dto';
import GetPostsDto from './dto/getPosts.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private db;
    findAllWithStatus(body: GetPostsDto, status: string): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findAllOffers(id: string): Promise<import(".prisma/client").Offer[][]>;
    incrimentView(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    constructor(db: PostDatabse);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(body: GetPostsDto): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
