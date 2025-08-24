'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const LINKS = [
        { href: '/login', label: 'Login' },
        { href: '/register', label: 'Register' },
    ]
    const [input, setinput] = useState('')
    const pathname = usePathname()
    console.log(pathname);

    return (
        <div>
            <input type="text" value={input} onChange={e => setinput(e.target.value)}
                className='border p-2 rounded-md my-6' />
            <nav>
                <ul className='flex bg-yellow-200 justify-around '>
                    {LINKS.map(link => (
                        <li key={link.href}>
                            <Link className={pathname == link.href ? 'font-extrabold' : ''} href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </div>
    )
}
