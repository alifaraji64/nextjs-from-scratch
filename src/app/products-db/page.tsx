export type Product = {
    id: number;
    title: string;
    price: number;
    description?: string | null;
}

import { getProducts, seedProducts } from '../../prisma-db';
import Link from 'next/link';
import DeleteButton from './delete-button';
import ProductList from './product-list';
export default async function ProductsDBPage() {
    await seedProducts()
    const products: Product[] = await getProducts();
    return (
        <div>
            <Link href={'/products-db/create'} className='text-center mx-auto bg-red-400 p-1 text-white mt-10'>Create New Product</Link>
            <ul>

                <ProductList products={products} />
            </ul>
        </div>
    )
}
