'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const LINKS = [
        { href: '/login', label: 'Login' },
        { href: '/register', label: 'Register' },
    ]
    const pathname = usePathname()
    console.log(pathname);
    
    return (
        <div>
            <nav>
                <ul className='flex bg-yellow-200 justify-around '>
                    {LINKS.map(link => (
                        <li key={link.href}>
                            <Link className={pathname==link.href?'font-extrabold':''} href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
        </div>
    )
}
