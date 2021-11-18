import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        categories: { type: Array },
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },

    },
    { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;