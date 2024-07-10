import QueryBuilder from "../../builder/QueryBuilder";
import AppError from "../../errors/AppError";
import { categorySearchableFields } from "./categoryConstants";
import { TCategory } from "./categoryInterface";
import Category from "./categoryModel";

const createCategoryIntoDB = async (payload: TCategory) => {
    const result = await Category.create(payload);
    return result;
};

const getAllCategoryFromDB = async (query: Record<string, unknown>) => {
    const categoryQuery = new QueryBuilder(Category.find(), query)
        .search(categorySearchableFields)
        .sort()
        .filter()
        .fields()
        .paginate();

    const result = await categoryQuery.modelQuery;
    return result;
};

const getSingleCategoryFromDB = async (id: string) => {
    const category = await Category.findById(id);

    if (!category) {
        throw new AppError(404, 'Product not found')
    }
    const result = await Category.findById(id);
    return result;
};

const updateCategoryIntoDB = async (id: string, payload: Partial<TCategory>) => {
    const category = await Category.findById(id);

    if (!category) {
        throw new AppError(404, 'Product not found')
    }
    const result = await Category.findByIdAndUpdate(id, payload, { new: true })
    return result;
};

const deleteCategoryFromDB = async (id: string) => {

    const category = await Category.findById(id);

    if (!category) {
        throw new AppError(404, 'Product not found')
    }

    const result = await Category.findByIdAndDelete(id);
    return result;
};

export const CategoryServices = {
    createCategoryIntoDB,
    getAllCategoryFromDB,
    getSingleCategoryFromDB,
    updateCategoryIntoDB,
    deleteCategoryFromDB,
}