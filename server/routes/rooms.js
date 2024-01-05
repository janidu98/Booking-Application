import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/roomControllers.js';

const route = express.Router();

//create a room
route.post('/:hotelid', verifyAdmin, createRoom);
//update a room
route.put('/:id', verifyAdmin, updateRoom);
//delete a room
route.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//get a room
route.get('/:id', getRoom);
//get all rooms
route.get('/', getAllRooms);

export default route;