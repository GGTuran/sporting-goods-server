import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./orderService";

const createOrder = catchAsync(async (req, res) => {
    const result = await OrderServices.createOrderIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Order added successfully',
        data: result,
    });
});

export const OrderControllers = {
    createOrder,
}