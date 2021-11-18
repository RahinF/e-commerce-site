import { Router } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);
const stripeRoute = Router();

stripeRoute.post("/payment", async (req, res) => {
  await stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "aud",
    },
    (stripeError, stripeRes) => {
      if (stripeError) {
        res.status(500).json(stripeError);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default stripeRoute;
