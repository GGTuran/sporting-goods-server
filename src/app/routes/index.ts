import { Router } from "express";
import { ProductRoutes } from "../modules/product/productRoutes";
import { OrderRoutes } from "../modules/order/orderRoutes";


const router = Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRoutes,
    },
    {
        path: '/orders',
        route: OrderRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;