import { z } from 'zod';

const createOrderZod = z.object({
    body: z.object({
        userName: z.string().min(3).max(50),
        email: z.string().email(),
        phone: z.string().regex(/^\+?[0-9]{3}-?[0-9]{6,12}$/),
        deliveryAddress: z.string(),
        productId: z.string(),
        quantity: z.number().int().positive(),
        paymentMethod: z.string(),
    })
});

export const OrderValidations = {
    createOrderZod,
}