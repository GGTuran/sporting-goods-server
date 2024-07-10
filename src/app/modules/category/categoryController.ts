import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./categoryService";

const createCategory = catchAsync(async (req,res) => {
    const result = await CategoryServices.createCategoryIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Category added successfully',
        data: result,
    });
});

const getAllCategory = catchAsync(async (req,res) => {
    const result = await CategoryServices.getAllCategoryFromDB(req.query);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Categories retrieved successfully',
        data: result,
    });
});

const getSingleCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CategoryServices.getSingleCategoryFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Category retrieved successfully',
        data: result,
    });
});

const updateCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await CategoryServices.updateCategoryIntoDB(id, updatedData);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Category updated successfully',
        data: result,
    });
});

const deleteCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CategoryServices.deleteCategoryFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Category deleted successfully',
        data: result,
    });
});

export const CategoryControllers = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};