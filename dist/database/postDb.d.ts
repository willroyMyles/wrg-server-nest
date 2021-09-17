import { CreatePostDto } from "src/post/dto/create-post.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import DbBase from "./dbBase";
export default class PostDatabse extends DbBase {
    create(createPostDto: CreatePostDto): Promise<import(".prisma/client").Post>;
    findAll(): Promise<import(".prisma/client").Post[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: number): Promise<any>;
}
