'use client'
import { editProduct, Error } from '@/actions/products';
import React, { useActionState } from 'react'
import { SubmitButton } from '../create/submit';
type Product = {
    id: number;
    title: string;
    price: number;
    description?: string | null;
}
export default function ProductEditForm({ product }: { product: Product | null }) {
    const editProductWithId = editProduct.bind(null, product!.id);
    const [state, formAction, isPending] = useActionState(editProductWithId, { errors: {} as Error });

    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
                <label className="text-white">
                    Title
                    <input
                        type="text"
                        className="block w-full p-2 text-black border rounded"
                        name="title"
                        placeholder="title"
                        defaultValue={product?.title || ""}
                    />
                </label>
                {state.errors.title && (
                    <p className="text-red-500">{state.errors.title}</p>
                )}
            </div>
            <div>
                <label className="text-white">
                    Price
                    <input
                        type="number"
                        className="block w-full p-2 text-black border rounded"
                        name="price"
                        placeholder="price"
                        defaultValue={product?.price || 0}
                    />
                </label>
                {state.errors.price && (
                    <p className="text-red-500">{state.errors.price}</p>
                )}
            </div>
            <div>
                <label className="text-white">
                    Description
                    <textarea
                        className="block w-full p-2 text-black border rounded"
                        name="description"
                        placeholder="description"
                        defaultValue={product?.description || ""}
                    />
                </label>
                {state.errors.description && (
                    <p className="text-red-500">{state.errors.description}</p>
                )}
            </div>
            {isPending ? <p>Loading...</p> : <SubmitButton />}
        </form>
    )
}
