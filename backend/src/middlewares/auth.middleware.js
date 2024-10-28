import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';

const isTokenExpired = (token) => {
    if (!token) return true; // No token, treat as expired

    const decoded = jwt.decode(token);
    const currentTime = Date.now() / 1000; // Convert current time to seconds (Unix time)

    return decoded.exp < currentTime;
};

const verifyJWT = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        throw new ApiError(405, "Unauthorized: Access token not found  (Error from verifyJWT)");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decodedToken) {
        throw new ApiError(401, "Unauthorized: Invalid access token (Error from verifyJWT)");
    }

    const user = await User.findById(decodedToken._id).select("-password -refreshToken");
    if (!user) {
        throw new ApiError(404, "User not found (Error from verifyJWT)");
    }

    req.user = user;

    next();
});

export default verifyJWT;