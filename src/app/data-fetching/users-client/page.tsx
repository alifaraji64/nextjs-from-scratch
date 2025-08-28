'use client'
import React, { useState, useEffect } from 'react'
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient() {
  const [Users, setUsers] = useState<User[] | null>(null);
  const [loading, setloading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    return res.json();
  }
  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);

    }).catch(err => {
      setError(err.message);

    }).finally(() => {
      setloading(false);
    }
    )
  }, []);
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return (
    <>
      <div>data fetched</div>
      <ul className='p-4'>
        {Users?.map(user => (
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
