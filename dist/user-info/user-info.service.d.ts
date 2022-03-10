import UserInfoDatabase from '../database/userInfo.database';
import { AddToWatchRequest } from './dto/add-to-watch.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoService {
    private db;
    getOtherUserInfo(id: string): Promise<any>;
    addToWatch(postToAdd: AddToWatchRequest): Promise<boolean>;
    constructor(db: UserInfoDatabase);
    create(info: any): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
