import PostDatabse from 'src/database/post.database';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private db;
    incrimentView(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    constructor(db: PostDatabse);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
