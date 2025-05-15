import {Request,Response} from "express"
import asyncHandler from "express-async-handler"

import UserService from "../services/UserService"
import {ErrorResponse} from "../middlewares/errorHandler"
import { CustomRequest } from "../middlewares/auth"

const UserController={
    updateProfile:asyncHandler(async (req:Request, res:Response)=>{
        const userId=(req as CustomRequest).userId
        const {name, bio}=req.body
        await UserService.updateProfile(userId,name,bio)
        res.status(200).send("ok")
    })
}

export default UserController