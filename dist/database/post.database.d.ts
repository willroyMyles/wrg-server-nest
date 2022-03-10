import { CreatePostDto } from "src/post/dto/create-post.dto";
import GetPostsDto from "src/post/dto/getPosts.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import DbBase from "./dbBase";
export default class PostDatabse extends DbBase {
    findAllOffers(id: string): Promise<any>;
    incrimentView(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    create(createPostDto: CreatePostDto): Promise<any>;
    findAll(body: GetPostsDto): Promise<any>;
    findAllWithStatus(body: GetPostsDto, status: string): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: number): Promise<any>;
}
