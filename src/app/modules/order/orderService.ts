import { TOrder } from "./orderInterface";
import { Order } from "./orderModel";

const createOrderIntoDB = async (payload: TOrder) => {
    const result = await Order.create(payload);
    return result;
};

export const OrderServices = {
    createOrderIntoDB,
}