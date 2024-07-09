import { model, Schema } from "mongoose";
import { TProduct } from "./productInterface";

const ProductSchema = new Schema<TProduct>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

export const Product = model<TProduct>('Product', ProductSchema);