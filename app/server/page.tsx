import { listUsers } from "../lib/data";

export default async function Page() {
    const users = await listUsers();

    return (<>
        {
            users.map((user) => {
                return <p key={user.name}> {user.name}</p>
            })
        }
    </>)
}