import { notFound } from 'next/navigation'
import React from 'react'

export default async function ProductReview(
    { params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params
    if(parseInt(reviewId)>50){
        notFound()
    }
    return (
        <div>review {reviewId} for product {productId}</div>
    )
}
