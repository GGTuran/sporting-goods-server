import express from 'express';
import validate from '../../middlewares/validate';
import { OrderValidations } from './orderValidation';
import { OrderControllers } from './orderController';

const router = express.Router();

router.post(
    '/',
    validate(OrderValidations.createOrderZod),
    OrderControllers.createOrder
);

export const OrderRoutes = router;
