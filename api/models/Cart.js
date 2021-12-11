import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [{
            productId: { type: String },
            quantity: { type: Number, default: 1 },
            color: { type: String },
            size: { type: String }
        }],
    },
    { timestamps: true }
);
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;