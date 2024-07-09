import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./productService";

const createProduct = catchAsync(async(req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:'Product added successfully',
        data:result,
    });
});

export const ProductControllers = {
    createProduct,
}