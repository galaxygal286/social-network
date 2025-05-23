import { checkSchema, validationResult } from "express-validator"



const PostValidator = {
    createPost: checkSchema({
        text: {
            notEmpty: {
                errorMessage: "Text is required"
            }
        },
    }),
    fetchPosts:checkSchema({
        page:{
            isNumeric:{
                errorMessage:"Page must be a number"
            }
        },
        limit:{
            isNumeric:{
                errorMessage:"Limit must be a number"
            }
        }
    })
}

export default PostValidator