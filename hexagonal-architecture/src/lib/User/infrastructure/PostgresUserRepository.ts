import {Pool} from "pg";
import {User} from "../domain/User";
import {UserId} from "../domain/UserId";
import {UserRepository} from "../domain/UserRepository";
import {UserEmail} from "../domain/UserEmail";
import {UserName} from "../domain/UserName";
import {UserCreatedAt} from "../domain/UserCreatedAt";

type PostgresUser = {
    id: string;
    name: string;
    email: string;
    created_at: Date;
};

export class PostgrsUserRepository implements UserRepository {

    client: Pool;

    constructor(databaseUrl: string) {
        this.client = new Pool({
            connectionString: databaseUrl
        })
    }


    async create(user: User): Promise<void> {
        const query = `INSERT INTO users (id, name, email, created_at)
                       VALUES ($1, $2, $3, $4)`;
        const values = [user.id.value, user.name.value, user.email.value, user.createdAt.value];
        await this.client.query(query, values);
    }

    async getAll(): Promise<User[]> {
        const query = `SELECT *
                       FROM users`;
        const result = await this.client.query<PostgresUser>(query);
        return result.rows.map(row => new User(new UserId(row.id), new UserName(row.name), new UserEmail(row.email), new UserCreatedAt(row.created_at)));
    }

    async getOneById(id: UserId): Promise<User> {
        const query = `SELECT *
                       FROM users
                       WHERE id = $1`;
        const values = [id.value];
        const result = await this.client.query<PostgresUser>(query, values);
        if (result.rows.length === 0) {
            throw new Error(`User with id ${id.value} not found`);
        }
        const row = result.rows[0];
        return new User(new UserId(row.id), new UserName(row.name), new UserEmail(row.email), new UserCreatedAt(row.created_at));
    }
    
    async edit(user: User): Promise<void> {
        const query = `UPDATE users
                       SET name  = $1,
                           email = $2
                       WHERE id = $3`;
        const values = [user.name.value, user.email.value, user.id.value];
        await this.client.query(query, values);
    }

    async delete(id: UserId): Promise<void> {
        const query = `DELETE
                       FROM users
                       WHERE id = $1`;
        const values = [id.value];
        await this.client.query(query, values);
    }

}