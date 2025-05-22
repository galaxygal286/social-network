import {checkSchema,validationResult} from "express-validator"



const PostValidator={
    createPost:checkSchema({
            text:{
                notEmpty:{
                    errorMessage:"Text is required"
                }
            },
        })
}

export default PostValidator