import "@/config/database"
import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }
  });
  

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)