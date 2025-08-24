'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        // Handle the order click event
        router.push('/')
    }
  return (
    <div>
        <h1>OrderProduct</h1>
        <button onClick={handleClick} className='p-1 bg-red-500 rounded-md text-white cursor-pointer'>Order Now</button>
    </div>
  )
}
