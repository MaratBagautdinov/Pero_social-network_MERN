import express from "express"
import {getUser} from "../controllers/user/getUser.js";
import {registerUser, loginUser, getMe} from "../controllers/user/authUser.js";
import {getUsers} from "../controllers/user/getUsers.js";
import {protectAuth, validatorRegister} from "../middleware/authMiddleware.js";


const router = express.Router()

router.route('/').get(getUsers)
router.route('/:id').get(getUser)
router.route('/auth/me').get(protectAuth, getMe)
router.route('/auth/login').post(loginUser)
router.route('/auth/register').post(validatorRegister, registerUser)

export default router