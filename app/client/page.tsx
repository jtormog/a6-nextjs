'use client'

import { useState, useEffect } from "react";

export default function Page(){
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        async function fetchUser(){
            const data = await fetch('http://localhost:3000/api')
            const userData = await data.json();
            setUsers(userData);
        }
        fetchUser();

    },[]);

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