import { UserInfo } from "src/user-info/entities/user-info.entity";
export declare class Post {
    title: String;
    content: String;
    category: String;
    make: String;
    model: String;
    year: number;
    views: number;
    userInfo: UserInfo;
    username: String;
    userId: String;
    userImageUrl: String;
}
