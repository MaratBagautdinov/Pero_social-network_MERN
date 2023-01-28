import express from "express"
import {createPost} from "../controllers/posts/createPost.js";
import {getUserPosts} from "../controllers/posts/getUserPosts.js";
import {delPost} from "../controllers/posts/delPost.js";
import {likePost} from "../controllers/posts/likePost.js";
import {protectAuth} from "../middleware/authMiddleware.js";


const router = express.Router()

router.route('/').post(protectAuth, createPost)
router.route('/:userID').get(getUserPosts)
router.route('/:id').delete(protectAuth, delPost)
router.route('/like').put(protectAuth, likePost)

export default router