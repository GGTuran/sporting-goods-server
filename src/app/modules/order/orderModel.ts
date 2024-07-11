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
    productId: { 
        type: Schema.Types.ObjectId,
         ref: 'Product',
          required: true
         },
    quantity: {
         type: Number,
          required: true
         },
    paymentMethod: {
         type: String, 
         required: true },
},
{
    timestamps:true
}
);

export const Order = model<TOrder>('Order', OrderSchema)



OrderSchema.pre('save', async function (next) {
    const amount = await Product.findById(this.productId);                  //checking the availability
  
    if (!amount) {
      throw new Error("This product doesn't exist in the database");
    }
  
    if (amount.stockQuantity < this.quantity) {                        //checking the amount of product   
      throw new Error('Insufficient quantity available in inventory');
    }
  
    amount.stockQuantity -= this.quantity;                            //updating the product
    // amount.inventory.inStock = amount.inventory.quantity > 0;
  
    await amount.save(); 
  
    next();
  });