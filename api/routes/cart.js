import { Router } from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorisation } from "../middleware/verifyToken.js";
import Cart from '../models/Cart.js'

const cartRoute = Router();

// ADD CART
cartRoute.post("/", verifyTokenAndAuthorisation, async (req, res) => {
    const newCart = new Cart(req.body);
    
      try {
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
      } catch (error) {
        res.status(500).json(error);
      }
});


// UPDATE CART
cartRoute.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {

  try {


    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
          { $push: { products: req.body } },
          { new: true }
        );
    res.status(200).json(updatedCart);




  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE CART
cartRoute.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted.");
    } catch (error) {
        res.status(500).json(error); 
    }
});



// GET USER CART
cartRoute.get('/find/:id', verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.id});
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});




// GET ALL CARTS
cartRoute.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);    
    } catch (error) {
    res.status(500).json(error);
    }
});



export default cartRoute;