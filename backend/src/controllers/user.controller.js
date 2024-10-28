import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { WHITELISTED_ADMIN_EMAILS } from "../constants.js";
import jwt from "jsonwebtoken";

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
        isAdmin: WHITELISTED_ADMIN_EMAILS.includes(email) ? true: false,
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
});

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

    const { accessToken, refreshToken } = await generateTokens(user._id);

    return res
        .status(200)
        .cookie("accessToken", accessToken, { httpOnly: true })
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .json(new ApiResponse(200, "User logged in successfully", user));
});

const googleRegister = asyncHandler(async (req, res) => {
    const { email, displayName } = req.body;
    if (!email || !displayName) {
        throw new ApiError(500, "Google registration failed (email and name is not provided by google)");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
        const { accessToken, refreshToken } = await generateTokens(userExists._id);
        userExists.password = "its hidden nigga!"

        return res
            .status(200)
            .cookie("accessToken", accessToken, { httpOnly: true })
            .cookie("refreshToken", refreshToken, { httpOnly: true })
            .json(new ApiResponse(200, "Google sign in successfull", userExists));
    }

    // generate random password and hash it
    const password = Math.random().toString(36).slice(-8);

    // generate user and store it
    const user = await User.create({
        email: email,
        name: displayName,
        password: password,
        isAdmin: WHITELISTED_ADMIN_EMAILS.includes(email) ? true: false,
    })

    if (!user) {
        throw new ApiError(501, "Google registration failed (user creation failed)");
    }

    const userCreated = await User.findOne({ email })?.select("-password -refreshToken")
    if (!userCreated) {
        throw new ApiError(502, "Google registration failed (user not found after creation)");
    }

    const { accessToken, refreshToken } = await generateTokens(userCreated._id);

    return res
        .status(200)
        .cookie("accessToken", accessToken, { httpOnly: true })
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .json(new ApiResponse(200, "Google sign in successfull", userCreated));
});

const logout = asyncHandler(async (req, res) => {
    await User.findOneAndUpdate({ _id: req.user._id }, {
        refreshToken: ""
    });

    return res
        .status(200)
        .clearCookie("accessToken")
        .clearCookie("refreshToken")
        .json(
            new ApiResponse(200, "User logged out successfully")
        );
});

const generateAccessToken = asyncHandler(async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        throw new ApiError(400, "Error from generateAccessToken: Refresh token not provided");
    }

    const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    if (!decodedToken) {
        throw new ApiError(401, "Error from generateAccessToken: Invalid refresh token token");
    }

    const user = await User.findById(decodedToken._id);
    if (!user) {
        throw new ApiError(404, "Error from generateAccessToken: User not found");
    }
    if (refreshToken != user.refreshToken) {
        throw new ApiError(405, "Error from generateAccessToken: Refresh token dosen't match");
    }

    const accessToken = await user.generateAccessToken();

    return res
        .status(200)
        .cookie("accessToken", accessToken, { httpOnly: true })
        .cookie("refreshToken", refreshToken, { httpOnly: true })
        .json(
            new ApiResponse(200, "Access token generated successfully")
        )
});

const getUser = asyncHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, "User fetched successfully", req.user));
})

export {
    register,
    login,
    googleRegister,
    logout,
    generateAccessToken,
    getUser,
}
