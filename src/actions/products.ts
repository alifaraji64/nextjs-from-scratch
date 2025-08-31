'use server'
import { addProduct, updateProduct,deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export type Error = {
    title?: string;
    price?: string;
    description?: string;
};
type formState = {
    errors: Error;
}

export async function createProduct(prevState: formState, formData: FormData): Promise<formState> {
    prevState.errors = {};
    const title = formData.get('title') as string;
    const price = parseFloat(formData.get('price') as string);
    const description = formData.get('description') as string;
    const errors: Error = {};
    if (!title) errors.title = "Title is required";
    if (!price) errors.price = "Price is required";
    if (!description) errors.description = "Description is required";
    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    await addProduct({ title, price, description });
    redirect('/products-db');
}

export async function editProduct(id: number, prevState: formState, formData: FormData): Promise<formState> {
    prevState.errors = {};
    const title = formData.get('title') as string;
    const price = parseFloat(formData.get('price') as string);
    const description = formData.get('description') as string;
    const errors: Error = {};
    if (!title) errors.title = "Title is required";
    if (!price) errors.price = "Price is required";
    if (!description) errors.description = "Description is required";
    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    await updateProduct(id, { title, price, description });
    redirect('/products-db');
}
export async function removeProduct(id: number): Promise<void> {
    await deleteProduct(id);
    redirect('/products-db');
}