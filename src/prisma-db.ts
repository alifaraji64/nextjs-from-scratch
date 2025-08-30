import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedProducts = async () => {
    const products = [
        { title: "Product 1", price: 100, description: "Description for Product 1" },
        { title: "Product 2", price: 200, description: "Description for Product 2" },
        { title: "Product 3", price: 300, description: "Description for Product 3" },
    ];

    if ((await prisma.product.count()) === 0) {
        for (const product of products) {
            await prisma.product.create({ data: product });
        }
        console.log("Database seeded with initial products.");
    }
}

export const getProducts = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return prisma.product.findMany();
}
export const getProduct = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return prisma.product.findUnique({ where: { id } })
}
export const addProduct = async (data: { title: string; price: number; description?: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return prisma.product.create({ data });
}
export const updateProduct = async (id: number, data: { title?: string; price?: number; description?: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return prisma.product.update({ where: { id }, data });
}
export const deleteProduct = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return prisma.product.delete({ where: { id } });
}   