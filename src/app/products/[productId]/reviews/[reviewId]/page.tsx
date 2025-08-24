import { notFound, redirect } from 'next/navigation'
import React from 'react'

export default async function ProductReview(
    { params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params
    if(parseInt(reviewId)>50){
        redirect('/products')
    }
    return (
        <div>review {reviewId} for product {productId}</div>
    )
}
