import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";


const router = express.Router();

router.get("/",validate(RestaurantSchema), async (req, res, next) => {
  const data = req.body as Restaurant;
  res.send(data);
});

export default router;
