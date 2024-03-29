import { Router } from "express";
import { verifyTokenAndAdmin, verifyTokenAndAuthorisation } from "../middleware/verifyToken.js";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const userRoute = Router();

// UPDATE USER
userRoute.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
});


// DELETE USER
userRoute.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET USER
userRoute.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...userData } = user._doc;
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL USERS
userRoute.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const query = req.query.new;

        const users = query
          ? await User.find().sort({ _id: -1 }).limit(5)
          : await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// USER STATS
userRoute.get("/stats", async (req, res)=> {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear }}}, 
        { $project: { month: { $month : "$createdAt" }}},
        { $group: { _id: "$month", total: { $sum: 1 }}}
      ]);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
});

export default userRoute;
