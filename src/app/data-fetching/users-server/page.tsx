import React from 'react'
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: User[] = await res.json();
    if (!users.length) throw new Error('users not defined')

    return (
        <>
            <div>data fetched</div>
            <ul className='p-4'>
                {users?.map(user => (
                    <li className='text-gray-700 border-2 border-black mb-4 p-3 rounded-xl' key={user.id}>
                        <h1 className='text-lg font-bold'>name: {user.name}</h1>
                        <p>email: {user.email}</p>
                        <p>phone: {user.phone}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}
