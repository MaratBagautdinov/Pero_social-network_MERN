// @desc    Create post
// @route   DELETE /api/posts/delete/:id
// @access  Public

import Posts from '../../models/postsModel.js'
import asyncHandler from 'express-async-handler'
import User from "../../models/userModel.js";

export const delPost = asyncHandler(async(req, res) => {
    const post = await Posts.findById(req.params.id)

    const user = await User.findById(post.postOwn)
    user.posts = user.posts.filter(id => String(id) !== String(post._id))


    await post.likedUsers.map(async userID => {
            const id = String(userID)
            const user = await User.findById(id)
            console.log(user)
            user.favoritePosts = user.favoritePosts.filter(id => id.toString() !== String(post._id))
            user.save()
        })
    await user.save()

    await post.remove()
    res.json({user})
})