import PostDatabse from 'src/database/postDb';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostService {
    private db;
    constructor(db: PostDatabse);
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(): Promise<import(".prisma/client").Post[]>;
    findOne(id: number): string;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
