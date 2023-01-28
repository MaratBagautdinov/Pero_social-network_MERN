// @desc    Create post
// @route   POST /api/posts/create
// @access  Public

import Posts from '../../models/postsModel.js'
import asyncHandler from 'express-async-handler'
import User from "../../models/userModel.js";

export const createPost = asyncHandler(async(req, res) => {
    const { postOwn, content } = req.body
    const date = new Date()
    const post = await Posts.create({
        postOwn,
        content,
        date: {
            time: date.toLocaleTimeString().slice(0,-3) ,
            day: date.toLocaleDateString()
        }
    })
    const user = await User.findById(postOwn)
    user.posts.push(post._id)
    await user.save()
    res.json({post})
})