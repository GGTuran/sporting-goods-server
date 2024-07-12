/* eslint-disable @typescript-eslint/no-explicit-any */
import { model, Schema } from "mongoose";
import { TOrder } from "./orderInterface";
import { Product } from "../product/productModel";

const OrderSchema = new Schema<TOrder>({
    userName: {
         type: String,
          required: true
         },
    email: {
         type: String,
          required: true 
        },
    phone: {
         type: String,
          required: true 
        },
    deliveryAddress: {
         type: String,
          required: true
         },
         products: [{
          productId: {
              type: Schema.Types.ObjectId,
              ref: 'Product',
              required: true
          },
          quantity: {
              type: Number,
              required: true
          }
      }],
   
    paymentMethod: {
         type: String, 
         required: true },
},
{
    timestamps:true
}
);


//to reduce quantity
OrderSchema.pre('save', async function(next) {
     try {
         const productUpdates = this.products.map(async (productOrder) => {
             const product = await Product.findById(productOrder.productId);
             if (!product) {
                 throw new Error(`Product with ID ${productOrder.productId} not found`);
             }
             if (product.stockQuantity < productOrder.quantity) {
                 throw new Error(`Insufficient stock for product with ID ${productOrder.productId}`);
             }
             product.stockQuantity -= productOrder.quantity;
             await product.save();
         });
 
         await Promise.all(productUpdates);
         next();
     } catch (error: any) {
         next(error);
     }
 });

export const Order = model<TOrder>('Order', OrderSchema)



