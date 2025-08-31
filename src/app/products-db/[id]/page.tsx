
import { getProduct } from "@/prisma-db";
import ProductEditForm from "./product-edit-form";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = await getProduct(parseInt(id));
    console.log(product);
    if (product)
        return <ProductEditForm product={product} />;
    return <p>Product not found</p>;
}
