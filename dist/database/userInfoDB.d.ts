import { CreateUserInfoDto } from "src/user-info/dto/create-user-info.dto";
import { UpdateUserInfoDto } from "src/user-info/dto/update-user-info.dto";
import DbBase from "./dbBase";
export default class UserInfoDatabase extends DbBase {
    create(createUserInfoDto: CreateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    findAll(): Promise<import(".prisma/client").UserInfo[]>;
    findOne(id: number): Promise<import(".prisma/client").UserInfo>;
    update(id: number, updateUserInfoDto: UpdateUserInfoDto): Promise<import(".prisma/client").UserInfo>;
    remove(id: number): Promise<import(".prisma/client").UserInfo>;
}
