import {Router} from "express"

import UserController from "../controllers/UserController"
import UserValidator from "../validators/UserValidator"
import {ValidateRequest} from "../middlewares/validation"
import { Protect } from "../middlewares/auth"


const router=Router()

router.use(Protect)

router.put(
    '/profile',
    UserValidator.updateProfile,
    ValidateRequest,
    UserController.updateProfile
)

export default router