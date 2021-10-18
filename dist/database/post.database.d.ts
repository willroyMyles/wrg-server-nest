import { CreatePostDto } from "src/post/dto/create-post.dto";
import GetPostsDto from "src/post/dto/getPosts.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import DbBase from "./dbBase";
export default class PostDatabse extends DbBase {
    findAllOffers(id: string): Promise<import(".prisma/client").Offer[][]>;
    incrimentView(id: string): Promise<boolean>;
    incrimentWatching(id: string): Promise<boolean>;
    incrimentComments(id: string): Promise<boolean>;
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(body: GetPostsDto): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findAllWithStatus(body: GetPostsDto, status: string): Promise<(import(".prisma/client").Post & {
        UserInfo: import(".prisma/client").UserInfo;
    })[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: number): Promise<any>;
}
