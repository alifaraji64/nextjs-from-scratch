import Link from 'next/link'
import React from 'react'
export default function ProductList() {
    return (
        <>
            <h1>Product List</h1>
            <Link href={'/products/1'}>
                <h2> Product 1 Details</h2>
            </Link>
            <Link href={'/products/2'}>
                <h2> Product 2 Details</h2>
            </Link>
            <Link href={'/products/3'} replace>
                <h2> Product 3 Details</h2>
            </Link>
        </>
    )
}
