import { db } from "@vercel/postgres";

const client = await db.connect();

export async function listUsers(){

    const users = await client.sql`select * from a6_users`;
    return users.rows;
}