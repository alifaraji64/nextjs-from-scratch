import React from 'react'
type Props = {
    params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props) => {
    const { productId } = (await params)
    return {
        title: `Product ${productId}`,
        description: `Description for product ${productId}`,
    }
}
export default async function ProductDetails(
    { params }: Props) {
    const { productId } = (await params)
    return (
        <div>ProductDetails of {productId}</div>
    )
}
