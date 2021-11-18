import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authRoute = Router();

authRoute.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // check if email is already in use
  const user = await User.findOne({ email });
  if (user) return res.status(409).json("The email address entered is already in use.");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  const { _id, isAdmin } = savedUser._doc;
 
  jwt.sign(
    {
      _id,
      email,
      firstName,
      lastName,
      isAdmin
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" },
    (error, token) => {
      if (error) return res.status(500).json(error);
      res.status(201).json({ token: token });
    }
  );
});

authRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json("The email or password you have entered is invalid.");

  const { _id, password: hashedPassword, firstName, lastName, isAdmin } = user;

  const passwordIsCorrect = await bcrypt.compare(password, hashedPassword);

  if (passwordIsCorrect) {
    jwt.sign(
      { _id, email, firstName, lastName, isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" },
      (error, token) => {
        if (error) return res.status(500).json(error);
        res.status(200).json({ token: token });
      }
    );
  } else {
    res.status(401).json("The email or password you have entered is invalid.");
  }
});

export default authRoute;
