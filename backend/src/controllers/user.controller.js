import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { WHITELISTED_ADMIN_EMAILS } from "../constants.js";


// const generateTokens = asyncHandler(async (userid) => {
//     const user = await User.findById(userid);
//     if (!user) {
//         throw new ApiError(500, "User not found while generating tokens");
//     }

//     const accessToken = await user.generateAccessToken();
//     const refreshToken = await user.generateRefreshToken();

//     console.log(accessToken, refreshToken)

//     user.refreshToken = refreshToken;
//     await user.save({ validateBeforeSave: false });

//     return { accessToken, refreshToken };
// })

async function generateTokens(userid) {
    const user = await User.findById(userid);
    if (!user) {
        throw new ApiError(500, "User not found while generating tokens");
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
}

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new ApiError(400, "Please fill in all fields");
    }

    // check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new ApiError(403, "User already exists");
    }

    // create user
    const user = await User.create({
        name: name, 
        email: email,
        password: password,
        role: WHITELISTED_ADMIN_EMAILS.includes(email) ? "admin": "user",
    });

    if (!user) {
        throw new ApiError(500, "User registration failed");
    }

    const { accessToken, refreshToken } = await generateTokens(user._id);
    const newUser = await User.findById(user._id).select("-password -refreshToken");

    if (!newUser) {
        throw new ApiError(500, "User not found after registration");
    }

    return res
        .status(200)
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .cookie("accessToken", accessToken, { httpOnly: true })
        .json(new ApiResponse(200, "User registered successfully", newUser));
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ApiError(400, "Please fill in all fields");
    }

    // check if user exists
    const user = await User.findOne({ email })?.select("-refreshToken");
    if (!user) {
        throw new ApiError(401, "Invalid credentials");
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new ApiError(402, "Invalid credentials");
    }

    const { accessToken, refreshToken } = generateTokens(user._id);

    return res
        .status(200)
        .cookie("accessToken", accessToken, { httpOnly: true })
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .json(new ApiResponse(200, "User logged in successfully", user));
});

export {
    register,
    login,
}
