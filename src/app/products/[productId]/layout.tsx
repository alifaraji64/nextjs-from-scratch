import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        {children}
        <h2>Featured Products</h2>
        </>
    )
}
