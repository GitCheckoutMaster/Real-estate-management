import express from 'express';
import { register, login, googleRegister } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/google-register", googleRegister);

export default userRouter;
