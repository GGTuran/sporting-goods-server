import { z } from 'zod';

const createProductZod = z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    brand: z.string(),
    stockQuantity: z.number().min(0),
    rating: z.number().min(0).max(5),
    price: z.number().min(0),
    image: z.string().url(),
});

export const ProductValidations = {
    createProductZod,
}