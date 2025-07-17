import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
import { initializeRedisClient } from "../utils/client.js";


const router = express.Router();

router.get("/",validate(RestaurantSchema), async (req, res, next) => {
  const data = req.body as Restaurant;
  const client = await initializeRedisClient();
  res.send(data);
});

export default router;
