import UserInfoDatabase from '../database/userInfoDB';
import { AddToWatchRequest } from './dto/add-to-watch.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoService {
    private db;
    addToWatch(postToAdd: AddToWatchRequest): Promise<any>;
    constructor(db: UserInfoDatabase);
    create(info: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    remove(id: string): Promise<import(".prisma/client").UserInfo>;
}
