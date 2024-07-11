
import { model, Schema } from "mongoose";
import { TCart, TCartItem } from "./cartInterface";

const CartItemSchema = new Schema<TCartItem>({
    productId: {
        type: Schema.Types.ObjectId,
        required: [true, 'Product id is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    }

},
    { timestamps: true }
);

const CartSchema = new Schema<TCart>({
    items: {
        type: CartItemSchema,
        required: true
    }
})

export const Cart = model<TCart>('Cart', CartSchema)