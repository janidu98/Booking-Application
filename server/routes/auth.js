import express from 'express';
import { login, register } from '../controllers/authControllers.js';

const route = express.Router();

//register user
route.post('/register', register);
//login user
route.post('/login', login);

export default route;