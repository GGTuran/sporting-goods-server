import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./productService";

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.createProductIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Product added successfully',
        data: result,
    });
});

const getAllProduct = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductFromDB(req.query);
    //if there is no product in the database
    if (result.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Data Found",
            data: []
        });
    }
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Products retrieved successfully",
        data: result,
    });

});

const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Product retrieved successfully",
        data: result,
    });
});

const updateProduct = catchAsync(async (req,res) => {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await ProductServices.updateProductIntoDB(id, updatedData);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Product updated successfully",
        data:result,
    });
});

const deleteProduct =catchAsync(async(req,res)=>{
    const { id } = req.params;
    const result = await ProductServices.deleteProductFromDB(id);
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Product deleted successfully",
        data:result,
    })
})

export const ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
}