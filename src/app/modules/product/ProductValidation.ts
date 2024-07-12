import { z } from 'zod';

const createProductZod = z.object({
    body: z.object({
        name: z.string().min(1, { message: 'Product name must not be empty' }).max(100, { message: 'Product name must be less than or equal to 100 characters' }),
        description: z.string().min(1, { message: 'Product description must not be empty' }).max(500, { message: 'Product description must be less than or equal to 500 characters' }),
        category: z.string().min(1, { message: 'Category must not be empty' }).max(50, { message: 'Category must be less than or equal to 50 characters' }),
        brand: z.string().min(1, { message: 'Brand must not be empty' }).max(50, { message: 'Brand must be less than or equal to 50 characters' }),
        stockQuantity: z.number().min(0, { message: 'Stock quantity must be at least 0' }),
        rating: z.number().min(0, { message: 'Rating must be between 0 and 5' }).max(5, { message: 'Rating must be between 0 and 5' }),
        price: z.number(),
        image: z.string().url({ message: 'Image must be a valid URL' }),
    })
});
const updateProductZod = z.object({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(),
        brand: z.string().optional(),
        stockQuantity: z.number().min(0).optional(),
        rating: z.number().min(0).max(5).optional(),
        price: z.number().min(0).optional(),
        image: z.string().url().optional(),
    })
});

export const ProductValidations = {
    createProductZod,
    updateProductZod,
}