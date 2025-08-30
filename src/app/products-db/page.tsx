type Product = {
    id: number;
    title: string;
    price: number;
    description?: string | null;
}
import React from 'react'
import { getProducts, seedProducts } from '../../prisma-db';
export default async function ProductsDBPage() {
    await seedProducts()
    const products: Product[] = await getProducts();
    if (!products.length) return <div>No products found</div>
    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id} className='border-2 border-black p-4 m-4 rounded-xl'>
                        <h2 className='text-xl font-bold'>Title: {product.title}</h2>
                        <p>Price: ${product.price}</p>
                        {product.description && <p>Description: {product.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    )
}
