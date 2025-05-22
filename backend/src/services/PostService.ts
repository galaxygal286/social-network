import pool from "../config/database"
import { Post } from "../models/PostModel"
import bcrypt from 'bcrypt'

class PostService{
    async createPost(user_id:number,text:string,post_image?:string):Promise<Post>{
        const res=await pool.query(`
            INSERT INTO posts (user_id,text,post_image)
            VALUES ($1,$2,COALESCE($3, post_image))`,
            [user_id,text,post_image]
        )
        return res.rows[0]
    }
}

export default new PostService()