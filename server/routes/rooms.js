import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/roomControllers.js';

const route = express.Router();

route.post('/:hotelid', verifyAdmin, createRoom);
route.put('/:id', verifyAdmin, updateRoom);
route.delete('/:id', verifyAdmin, deleteRoom);
route.get('/:id', getRoom);
route.get('/', getAllRooms);

export default route;