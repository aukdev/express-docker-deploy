import {Router} from 'express';
import userRouter from "./user-router.mjs";

const rootRouter = Router();

rootRouter.use("/user", userRouter);

export default rootRouter;