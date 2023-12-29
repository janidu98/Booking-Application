import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';
import { verifyToken } from '../utils/verifyToken.js';

const route = express.Router();

//update user
route.put('/:id',verifyToken, updateUser);
//delete user
route.delete('/:id', verifyToken, deleteUser);
//get a user
route.get('/:id', getUser);
//get all users
route.get('/', getAllUsers);

export default route;