import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { AddToWatchRequest } from './dto/add-to-watch.dto';
import { Response } from 'express';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
    create(createUserInfoDto: CreateUserInfoDto): Promise<any>;
    modifyWatch(postToAdd: AddToWatchRequest, res: Response): Promise<void>;
    findAll(): Promise<any>;
    getOtherUserInfo(id: string): Promise<any>;
    findOne(id: string, res: Response): Promise<any>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
