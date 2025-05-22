import { Request, Response } from "express"
import asyncHandler from "express-async-handler"

import PostService from "../services/PostService"
import { ErrorResponse } from "../middlewares/errorHandler"
import { CustomRequest } from "../middlewares/auth"
import path from "path"
import fs from 'fs'

const PostController = {
    createPost: asyncHandler(async (req: Request, res: Response) => {
        const userId = (req as CustomRequest).userId
        const { text } = req.body

        const files = req.files as {
            post_image?: Express.Multer.File[];
        };

        const postImage = files?.post_image?.[0]?.filename;

        const createdPost = await PostService.createPost(userId, text, postImage)
        res.status(200).json({
            text: createdPost?.text,
            post_image_url: createdPost?.post_image,
        })
    })
}

export default PostController