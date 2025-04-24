import {checkSchema,validationResult} from "express-validator"



const AuthValidator={
    register:checkSchema({
            name:{
                notEmpty:{
                    errorMessage:"Name is required"
                }
            },
            email: {
                notEmpty:{
                    errorMessage:"Email is required"
                },
                isEmail:{
                    errorMessage:"Invalid email"
                } 
            },
            password: { 
                isLength: { 
                    options: { 
                        min: 8 
                    } 
                } 
            },
        }),
    login:checkSchema({
        email: {
            notEmpty:{
                errorMessage:"Email is required"
            },
            isEmail:{
                errorMessage:"Invalid email"
            } 
        },
        password: { 
            isLength: { 
                options: { 
                    min: 8 
                } 
            } 
        },
    })
}

export default AuthValidator