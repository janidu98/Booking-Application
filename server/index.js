import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoute from './routes/users.js';
import roomsRoute from './routes/rooms.js';
import hotelsRoute from './routes/hotels.js';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/hotels', hotelsRoute)

//error middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Internal server error';
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})