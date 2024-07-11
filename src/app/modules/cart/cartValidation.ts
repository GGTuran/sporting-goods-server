import { z } from 'zod';

// Zod schema for CartItem
export const CartItemSchema = z.object({
    productId: z.string(),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
});

// Zod schema for TCart
const CreateCartZod = z.object({
    body: z.object({

        items: z.array(CartItemSchema),
    })
});

export const CartValidations = {
    CreateCartZod,

}
