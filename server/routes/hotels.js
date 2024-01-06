import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const route = express.Router();

//create hotel
route.post('/create', verifyAdmin, createHotel);
//update hotel
route.put('/update/:id', verifyAdmin, updateHotel);
//delete hotel
route.delete('/delete/:id', verifyAdmin, deleteHotel);
//get hotel
route.get('/get/:id', getHotel);
//get all hotels
route.get('/getAll', getAllHotels);
route.get('/countByCity', countByCity);
route.get('/countByType', countByType);

export default route;