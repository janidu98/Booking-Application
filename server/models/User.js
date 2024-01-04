import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true 
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
<<<<<<< HEAD
            default: true
=======
            default: false
>>>>>>> ac095dedb12b5330f0e31e1efee709fc272630e0
        }
    },
    {timestamps: true}
);

export default mongoose.model("User", UserSchema);