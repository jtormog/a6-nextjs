import { db } from '@vercel/postgres'

const client =  await db.connect();

export async function GET(){
    await client.sql `BEGIN`
    await client.sql `CREATE TABLE A6_USERS (name text)`
    await client.sql `INSERT INTO A6_USERS (name) VALUES ('Jose Luis'), ('Carmen Mari')`
    await client.sql `COMMIT`
    return Response.json({message: 'Pues ya estaría'})
}