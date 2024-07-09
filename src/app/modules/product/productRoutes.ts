import express from 'express';
import validate from '../../middlewares/validate';
import { ProductValidations } from './ProductValidation';
import { ProductControllers } from './productController';

const router = express.Router();

router.post(
    '/',
    validate(ProductValidations.createProductZod),
    ProductControllers.createProduct
);

export const ProductRoutes = router;