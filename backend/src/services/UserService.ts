import pool from "../config/database"
import {User} from "../models/UserModel"
import bcrypt from 'bcrypt'

class UserService{
    async getUserByEmail(email:string):Promise<User|null>{
        const result=await pool.query('SELECT * FROM users WHERE email = $1',[email])
        return result.rows[0] || null
    }
    async createUser(user_data:Omit<User, 'id'|'created_at'|'updated_at'>):Promise<void>{
        const {name,email,password}=user_data
        const salt=await bcrypt.genSalt(10)
        const hashed_password=await bcrypt.hash(password,salt)
        const result=await pool.query(`
            INSERT INTO users (name,email,password)
            VALUES ($1,$2,$3)`,
            [name,email,hashed_password]
        )
    }
}

export default new UserService()