import { model, Schema } from "mongoose"
import { TCategory } from "./categoryInterface"


const CategorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
  description: {type: String, required: true},
 
})

const Category = model<TCategory>('Category', CategorySchema)

export default Category