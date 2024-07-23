import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import {UserRepository} from "../../domain/UserRepository";

export class UserDelete{
    constructor(private readonly repository: UserRepository) {
    }
    
    async run(id:string): Promise<void>{
        const user = await this.repository.getOneById(new UserId(id));
        if(!user) throw new UserNotFoundError("User Not Found");
       await  this.repository.delete(new UserId(id));
    }
}