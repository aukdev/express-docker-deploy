import {Router} from "express";
import type {Request, Response} from "express";
import UserDTO from "../dto/user-create-dto.mjs";
import {User} from "@prisma/client";
import DB from "../db/db.mjs";

const userRouter = Router();

userRouter.get("/test", (_: Request, w: Response<{ msg: string }>): void => {
    w.status(200).send({msg: "hi auk wijesinghe"});
})

userRouter.get('/all-users', async (_: Request, w: Response<{ data: User[] | null }>): Promise<void> => {
    try {
        const users = await DB.user.findMany();
        w.status(200).send({data: users});
    } catch (err) {
        console.log(err);
        w.status(500).send({data: null})
    }
})

userRouter.post("/create-user", async (c: Request<{}, { data: User | null }, UserDTO>, w: Response<{
    data: User | null
}>): Promise<void> => {
    try {
        const newUser = await DB.user.create({data: {...c.body}})
        w.status(200).send({data: newUser});
    } catch (err) {
        console.log(err);
        w.status(500).send({data: null})
    }
})
export default userRouter;