import React from 'react'
type Author = {
    id: number;
    name: string;
};
export default async function Author({userId}:{userId:number}) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const author: Author = await res.json();

    return (
        <div>
            <h2>author name: {author.name}</h2>
        </div>
    )
}
