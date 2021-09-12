import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoController {
    private readonly userInfoService;
    constructor(userInfoService: UserInfoService);
    create(createUserInfoDto: CreateUserInfoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): string;
    remove(id: string): string;
}
