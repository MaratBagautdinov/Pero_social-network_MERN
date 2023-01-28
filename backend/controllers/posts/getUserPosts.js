// @route   POST /api/posts/:userID
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import Posts from "../../models/postsModel.js";

export const getUserPosts = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.userID).lean()
    const initPosts = await Posts.find({}).lean()
    const posts = user.posts.map(id => initPosts.find(p => String(p._id) === String(id)))
    const result = []
    posts.map(p => {
        result.push({
            ...p,
            userLogo: user.images.logo,
            userName: `${user.name.firstName} ${user.name.lastName}`
        })
    })
    res.json(result)
})