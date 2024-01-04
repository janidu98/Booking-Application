import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const route = express.Router();

//create hotel
route.post('/', verifyAdmin, createHotel);
//update hotel
route.put('/:id', verifyAdmin, updateHotel);
//delete hotel
route.delete('/:id', verifyAdmin, deleteHotel);
//get hotel
route.get('/:id', getHotel);
//get all hotels
route.get('/', getAllHotels);

export default route;