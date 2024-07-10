import express from 'express';
import validate from '../../middlewares/validate';
import { categoryZodValidation } from './categoryValidation';
import { CategoryControllers } from './categoryController';

const router = express.Router();

router.post(
    '/',
    validate(categoryZodValidation.createCategoryZod),
    CategoryControllers.createCategory
);

router.get('/', CategoryControllers.getAllCategory);

router.get('/:id', CategoryControllers.getSingleCategory);

router.patch(
    '/:id',
    validate(categoryZodValidation.updateCategoryZod),
    CategoryControllers.updateCategory
);

router.delete('/:id', CategoryControllers.deleteCategory);

export const CategoryRoutes = router;