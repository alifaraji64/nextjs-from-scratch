import Link from 'next/link'
import React from 'react'
const Home = () => {

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
        </>
    )
}

export default Home
