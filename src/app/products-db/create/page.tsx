import { addProduct } from "@/prisma-db";
import { useActionState } from "react";
export default function AddProductPage() {
    async function createProduct(formData: FormData) {
        'use server'
        const title = formData.get('title') as string;
        const price = parseFloat(formData.get('price') as string);
        const description = formData.get('description') as string;
        await addProduct({ title, price, description });
    }
    return (
        <form action={createProduct} className="p-4 space-y-4 max-w-96">
            <div>
                <label className="text-white">
                    Title
                    <input
                        type="text"
                        className="block w-full p-2 text-black border rounded"
                        name="title"
                    />
                </label>
                {/* {state.errors.title && (
                    <p className="text-red-500">{state.errors.title}</p>
                )} */}
            </div>
            <div>
                <label className="text-white">
                    Price
                    <input
                        type="number"
                        className="block w-full p-2 text-black border rounded"
                        name="price"
                    />
                </label>
                {/* {state.errors.price && (
                    <p className="text-red-500">{state.errors.price}</p>
                )} */}
            </div>
            <div>
                <label className="text-white">
                    Description
                    <textarea
                        className="block w-full p-2 text-black border rounded"
                        name="description"
                    />
                </label>
                {/* {state.errors.description && (
                    <p className="text-red-500">{state.errors.description}</p>
                )} */}
            </div>
            {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button> */}
            {/* <Submit /> */}
        </form>
    )
}
