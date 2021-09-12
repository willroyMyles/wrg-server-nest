import UserInfoDatabase from 'src/database/userInfoDB';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoService {
    private db;
    constructor(db: UserInfoDatabase);
    create(createUserInfoDto: CreateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    findAll(): Promise<import(".prisma/client").UserInfo[]>;
    findOne(id: number): Promise<import(".prisma/client").UserInfo>;
    update(id: number, updateUserInfoDto: UpdateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    remove(id: number): Promise<import(".prisma/client").UserInfo>;
}
