import { Router } from "express";
import Product from '../models/Product.js'
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const productRoute = Router();

// ADD PRODUCT
productRoute.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    
      try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
      } catch (error) {
        res.status(500).json(error);
      }
});


// UPDATE PRODUCT
productRoute.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE PRODUCT
productRoute.delete("/:id", verifyTokenAndAdmin, async (req, res)=> {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET PRODUCT
productRoute.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});


// GET ALL PRODUCTS
productRoute.get("/", async (req, res) => {
  try {
  const queryLatest = req.query.latest;
  const queryCategory = req.query.category;

  let products;

  if(queryLatest){
    products = await Product.find().sort({createdAt: -1}).limit(5);
  }

  else if(queryCategory){
    products = await Product.find({categories : {$in: [queryCategory]}});
  }


  else {
    products = await Product.find();
  }

  

    res.status(200).json(products); 
  } catch (error) {
    res.status(500).json(error);
  }
});




export default productRoute;