import { Router } from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorisation,
} from "../middleware/verifyToken.js";
import Order from "../models/Order.js";

const orderRoute = Router();

// ADD ORDER
orderRoute.post("/", verifyTokenAndAuthorisation, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE ORDER
orderRoute.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE ORDERS
orderRoute.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted.");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USER ORDERS
orderRoute.get("/find/:id", verifyTokenAndAuthorisation, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL ORDERS
orderRoute.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET MONTHLY INCOME
orderRoute.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth }}}, 
        { $project: { month: { $month : "$createdAt" }, sales: "$amount"}},
        { $group: { _id: "$month", total: { $sum: "$sales" }}}
      ]);

      res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default orderRoute;
