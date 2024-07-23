import {UserRepository} from "../../domain/UserRepository";
import {User} from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserNotFoundError } from "../../domain/UserNotFoundError";

export class UserEdit {
    constructor(private readonly repository: UserRepository) {
    }
    async run(id: string, name:string, email:string) : Promise<void>{
        
        const user = await this.repository.getOneById(new UserId(id));
        
        if(!user) throw new UserNotFoundError("User Not Found");
        
        const newUser = new User(new UserId(id), new UserName(name), new UserEmail(email), new UserCreatedAt(new Date()));
        await this.repository.edit(newUser);
    }
}