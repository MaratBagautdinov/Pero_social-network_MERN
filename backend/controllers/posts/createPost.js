// @desc    Create post
// @route   POST /api/posts/create
// @access  Public

import Posts from '../../models/postsModel.js'
import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export const createPost = asyncHandler(async (req, res) => {
	let postOwn = req.userID
	const { content } = req.body
	const date = new Date()
	const post = await Posts.create({
		postOwn,
		content,
		date: {
			time: date.toLocaleTimeString().slice(0, -3),
			day: date.toLocaleDateString()
		}
	})
	const user = await User.findById(postOwn)
	user.posts.push({
		id: post._id,
		name: user.name.firstName + ' ' + user.name.lastName,
		logo: user.images.logo
	})
	await user.save()
	const result = post.toJSON()
	result.userLogo = user.images.logo
	result.userName = `${user.name.firstName} ${user.name.lastName}`

	res.json(result)
})
