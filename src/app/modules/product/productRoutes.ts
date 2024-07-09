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

router.get('/', ProductControllers.getAllProduct);

router.get('/:id', ProductControllers.getSingleProduct);

router.patch(
    '/:id',
    validate(ProductValidations.updateProductZod),
    ProductControllers.updateProduct
);

router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRoutes = router;