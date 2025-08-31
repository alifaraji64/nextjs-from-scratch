type Product = {
    id: number;
    title: string;
    price: number;
    description?: string | null;
}

import { getProducts, seedProducts } from '../../prisma-db';
import Link from 'next/link';
import DeleteButton from './delete-button';
export default async function ProductsDBPage() {
    await seedProducts()
    const products: Product[] = await getProducts();
    return (
        <div>
            <ul>

                {products.map(product => (
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
                            <DeleteButton productId={product.id} />
                        </div>
                    </div>


                ))}
            </ul>
        </div>
    )
}
