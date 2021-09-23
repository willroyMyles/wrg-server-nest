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
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    remove(id: string): Promise<import(".prisma/client").UserInfo>;
}
