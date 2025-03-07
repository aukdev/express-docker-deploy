import {Router} from 'express';
import type {Request, Response} from 'express';
import prisma from "../db/db.mjs";
import {User} from "@prisma/client";

const userRoutes = Router();

userRoutes.get('/', async (_: Request, w: Response<{ data: User[] }>) => {
    const data = await prisma.user.findMany();
    w.status(200).send({data});
})
export default userRoutes;