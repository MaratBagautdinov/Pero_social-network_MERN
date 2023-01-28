// @route   POST /api/posts/:userID
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import Posts from "../../models/postsModel.js";

export const likePost = asyncHandler(async(req, res) => {
    const {likeSender, postID} = req.body
    const user = await User.findById(likeSender)
    const checkLike = user.favoritePosts.find(i => i === postID)
    if(checkLike){
        user.favoritePosts = user.favoritePosts.filter(i => i !== postID)
    }else{
        user.favoritePosts.push(postID)
    }
    await user.save()
    const count = checkLike ? -1 : 1
    Posts.findByIdAndUpdate(
        {
            postID
        },
        {
            $inc: {likes: count}
        }
    )
    res.json(checkLike)
})