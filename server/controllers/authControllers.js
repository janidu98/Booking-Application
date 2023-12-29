import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const register = async(req, res, next) => {

    const {username, email, password} = req.body;
    try {
        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        
        if(!newUser) return res.status(401).send("User not created!");
        await newUser.save();
        res.status(200).send("User has been created");

    } catch (error) {
        next(error);
    }
}

export const login = async(req, res, next) => {

    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({email});      
        if(!validUser) return next(errorHandler(404, "User not found!"));

        const validePassword = await bcryptjs.compare(password, validUser.password)
        if(!validePassword) return next(errorHandler(400, "Wrong credential!"));
        
        const token = jwt.sign({id: validUser._id, isAdming: validUser.isAdmin}, process.env.JWT_SECRET);

        const {password: pass, isAdmin, ...rest} = validUser._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({...rest});

    } catch (error) {
        next(error);
    }
}