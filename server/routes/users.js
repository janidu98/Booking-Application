import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';
import {verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const route = express.Router();

//update user
route.put('/:id',verifyUser, updateUser);
//delete user
route.delete('/:id', verifyUser, deleteUser);
//get a user
route.get('/:id', verifyUser, getUser);
//get all users
route.get('/', verifyAdmin, getAllUsers);

export default route;