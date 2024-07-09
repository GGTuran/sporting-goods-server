import AppError from "../../errors/AppError";
import { TProduct } from "./productInterface";
import { Product } from "./productModel";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};

const getAllProductFromDB = async() => {
    const result = await Product.find();
    return result;
};

const getSingleProductFromDB = async(id: string) => {
    const result = await Product.findById(id);
    return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    const product = await Product.findById(id);

    if(!product){
        throw new AppError(404, 'Product not found')
    }
    const result = await Product.findByIdAndUpdate({ _id:id }, payload, {new: true});
    return result;
}

const deleteProductFromDB = async(id: string) => {
    const product = await Product.findById(id);

    if(!product){
        throw new AppError(404, 'Product not found')
    }

    const result = await Product.findByIdAndDelete(id);
    return result;

}

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
}