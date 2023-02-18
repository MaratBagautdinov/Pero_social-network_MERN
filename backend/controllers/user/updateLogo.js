import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export default asyncHandler(async (req, res) => {
	const fileName = req.file.originalname
	console.log(fileName)
	const user = await User.findById(req.userID)
	user.images.logo = String(fileName)
	user.save()
	res.json({ logo: user.images.logo, posts: user.posts })
})
