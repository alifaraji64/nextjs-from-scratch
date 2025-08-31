import { SignedOut } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

import Link from 'next/link'
import React from 'react'
const Home = async () => {
    const user = await currentUser();
    console.log(user?.id);
    
    return (
        <>
            <div>Home</div>
            <Link href={'/blog'}>blog</Link>
            <br />
            <Link href={'/products'}>products</Link>
            <br />
            <Link href={'/articles/123?lang=en'}>read in english</Link>
            <br />
            <Link href={'/articles/123?lang=fr'}>read in french</Link>
            <br />
            <SignedOut><Link href={'/login'}>login</Link></SignedOut>
        </>
    )
}

export default Home
