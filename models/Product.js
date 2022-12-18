import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
});

// the product afte the chain is the collection of the name;
const Product = models?.products || model('products', ProductSchema);
export default Product;