import express from "express"
import {createPost} from "../controllers/posts/createPost.js";
import {getUserPosts} from "../controllers/posts/getUserPosts.js";
import {delPost} from "../controllers/posts/delPost.js";
import {likePost} from "../controllers/posts/likePost.js";


const router = express.Router()

router.route('/').post(createPost)
router.route('/:userID').get(getUserPosts)
router.route('/:id').delete(delPost)
router.route('/like').put(likePost)

export default router