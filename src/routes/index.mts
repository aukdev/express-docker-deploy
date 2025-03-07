import {Router} from 'express';
import userRoutes from "./user-route.mjs";

const rootRouter = Router();

rootRouter.use('/user/', userRoutes);

export default rootRouter;