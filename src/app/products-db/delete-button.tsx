'use client'
import { removeProduct } from '@/actions/products';
import React, { useTransition } from 'react'

export default function DeleteButton({ productId }: { productId: number }) {
    const [isPending, startTransition] = useTransition();
    return (
        <button className={`${isPending ? 'opacity-50 cursor-not-allowed' : ''} bg-red-700 text-white p-2 rounded cursor-pointer`} disabled={isPending}
            onClick={() => startTransition(() => { void removeProduct(productId); })}>Delete</button>
    )
}
