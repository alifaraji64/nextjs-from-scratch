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
    <div>date fecthed {Users?.length}</div>
  )
}
