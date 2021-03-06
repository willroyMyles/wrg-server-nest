import { AddToWatchRequest } from "src/user-info/dto/add-to-watch.dto";
import { CreateUserInfoDto } from "src/user-info/dto/create-user-info.dto";
import { UpdateUserInfoDto } from "src/user-info/dto/update-user-info.dto";
import DbBase from "./dbBase";
export default class UserInfoDatabase extends DbBase {
    getOtherUserInfo(id: string): Promise<any>;
    addToWatch(postToAdd: AddToWatchRequest): Promise<boolean>;
    create(createUserInfoDto: CreateUserInfoDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateUserInfoDto: UpdateUserInfoDto): Promise<any>;
    remove(id: string): Promise<any>;
}
