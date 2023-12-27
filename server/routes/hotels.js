import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelControllers.js';

const route = express.Router();

//create hotel
route.post('/', createHotel);
//update hotel
route.put('/:id', updateHotel);
//delete hotel
route.delete('/:id', deleteHotel);
//get hotel
route.get('/:id', getHotel);
//get all hotels
route.get('/', getAllHotels);

export default route;