import { listUsers } from '@/app/lib/data';


export default async function pageDashboard(){
    const users = await listUsers();
    return (
        <>
        {
            users.map((user)=>{
                return <p className='block' key={user.name}>{user.name} </p>
            })
        }
        </>
    );
}