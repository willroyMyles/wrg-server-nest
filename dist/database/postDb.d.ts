import { CreatePostDto } from "src/post/dto/create-post.dto";
import { UpdatePostDto } from "src/post/dto/update-post.dto";
import DbBase from "./dbBase";
export default class PostDatabse extends DbBase {
    create(createPostDto: CreatePostDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<any>;
    remove(id: number): Promise<any>;
}
