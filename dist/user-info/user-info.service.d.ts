import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
export declare class UserInfoService {
    create(createUserInfoDto: CreateUserInfoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserInfoDto: UpdateUserInfoDto): string;
    remove(id: number): string;
}
