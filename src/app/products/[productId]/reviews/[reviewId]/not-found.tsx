'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NotFound() {
    const pathname = usePathname()
    const reviewId = pathname.split('/')[4]
    const productId = pathname.split('/')[2]

    return (
        <div>review not found for review of {reviewId} and product of {productId}</div>
    )
}
