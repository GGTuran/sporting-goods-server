import { Schema } from "mongoose";

export type TCartItem = {
    productId: Schema.Types.ObjectId;
    quantity: number;
};

export type TCart = {
    items: TCartItem
}