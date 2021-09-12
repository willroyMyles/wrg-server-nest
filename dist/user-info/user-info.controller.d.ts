import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
    create(createUserInfoDto: CreateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    findAll(): Promise<import(".prisma/client").UserInfo[]>;
    findOne(id: string): Promise<import(".prisma/client").UserInfo>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    remove(id: string): Promise<import(".prisma/client").UserInfo>;
}
