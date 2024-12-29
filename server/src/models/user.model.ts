import { Schema, Document, model } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
export interface IUser extends Document {
    username: string;
    firstName: string;
    lastName?: string;
    email: string;
    phoneNumber: string; // Changed to string to support E.164 format
    password: string;
    refreshToken: string;
    profilePicture: string;
    bio: string;
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            lowercase: true,
            trim: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: [true, "firstname is required"],
        },
        lastName: {
            type: String,
        },
        password: {
            type: String,
            minlength: 8,
            required: [true, "password is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
            required: [true, "Phone number is required"],
            match: [/^\+[1-9]\d{1,14}$/, "Phone number must be in E.164 format"], // Regex for E.164 validation
            unique: true,
        },
        refreshToken: {
            type: String,
        },
        profilePicture: {
            type: String,
        },
        bio: {
            type: String,
        },
    },
    { timestamps: true }
);
userSchema.pre("save",async function(){
    if (!this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
})
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        
    )
};
userSchema.methods.generateRefreshToken = function(){};
userSchema.methods.generateTokens = function(){};
userSchema.methods.comparePassword = function(){};

const User = model<IUser>("User", userSchema);



export default User;
