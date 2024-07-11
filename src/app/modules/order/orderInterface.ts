import mongoose from "mongoose"

export type TOrder = {
    userName: string;
    email: string;
    phone: string;
    deliveryAddress: string;
    productId: mongoose.Types.ObjectId;
    quantity: number;
    paymentMethod: string;
}


