import { TProduct } from "./productInterface";
import { Product } from "./productModel";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};


export const ProductServices = {
    createProductIntoDB,
}