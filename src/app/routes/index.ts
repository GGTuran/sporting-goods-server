import { Router } from "express";
import { ProductRoutes } from "../modules/product/productRoutes";
import { CategoryRoutes } from "../modules/category/categoryRoutes";


const router = Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRoutes,
    },
    {
        path: 'category',
        route: CategoryRoutes,
    },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;