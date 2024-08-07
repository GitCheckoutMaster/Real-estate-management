import express from 'express';

const userRouter = express.Router();

userRouter.get("/test", (req, res) => {
    res.send("GET /api/v1/user");
})

export default userRouter;
