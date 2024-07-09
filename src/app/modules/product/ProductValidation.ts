import { z } from 'zod';

const createProductZod = z.object({
    body: z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
        brand: z.string(),
        stockQuantity: z.number().min(0),
        rating: z.number().min(0).max(5),
        price: z.number().min(0),
        image: z.string().url(),
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