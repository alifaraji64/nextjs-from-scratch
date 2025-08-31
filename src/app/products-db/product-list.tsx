'use client'
import React, { useOptimistic } from 'react'
import type { Product } from './page';
import DeleteButton from './delete-button';
import Link from 'next/link';

export default function ProductList({ products }: { products: Product[] }) {
    const [optimisticProducts, addOptimisticProduct] = useOptimistic(
        products,
        (state, deletedId: number) => state.filter((p) => p.id !== deletedId)
    );
    if (optimisticProducts.length === 0) {
        return <p className='text-center font-bold text-xl mt-10'>No Products Available</p>
    }
    return (
        <>
            {
                optimisticProducts.map((product: Product) => (
                    <div key={product.id} className='border-2 border-black p-4 m-4 rounded-xl flex justify-between'>
                        <Link href={`/products-db/${product.id}`}>
                            <li >
                                <div>
                                    <h2 className='text-xl font-bold'>Title: {product.title}</h2>
                                    <p>Price: ${product.price}</p>
                                    {product.description && <p>Description: {product.description}</p>}
                                </div>
                            </li>
                        </Link>
                        <div className=' flex items-center font-bold'>
                            <DeleteButton productId={product.id} addOptimisticProduct={addOptimisticProduct} />
                        </div>
                    </div>


                ))
            }
        </>

    )
}
