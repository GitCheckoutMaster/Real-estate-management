import express from 'express';
import { register, login, googleRegister, logout, generateAccessToken, getUser } from '../controllers/user.controller.js';
import verifyJWT from '../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/google-register", googleRegister);
userRouter.post("/generate-access-token", generateAccessToken);

// secured routes
userRouter.post('/logout', verifyJWT, logout);
userRouter.get('/profile', verifyJWT, getUser);

export default userRouter;
