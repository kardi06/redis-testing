import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";
import { initializeRedisClient } from "../utils/client.js";
import { nanoid } from "nanoid";
import { restaurantKeyById } from "../utils/keys.js";
import { successResponse } from "../utils/responses.js";


const router = express.Router();

router.post("/",validate(RestaurantSchema), async (req, res, next) => {
  const data = req.body as Restaurant;
  try{
    const client = await initializeRedisClient();
    const id = nanoid();
    const restaurantKey = restaurantKeyById(id);
    const hashData = {id, name: data.name, location: data.location};
    const addResult = await client.hSet(restaurantKey, hashData);
    console.log(`Added ${addResult} field`);
    return successResponse(res, hashData, "Restaurant added successfully");
  }catch(error){
    next(error);
  }

  res.send(data);
});

export default router;
