import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

export default asyncHandler(async (req, res) => {
	const fileName = Math.trunc(Date.now() / 1000) + req.file.originalname
	const user = await User.findById(req.userID)

	user.images.logo = String(fileName)
	user.save()
	res.json({ logo: user.images.logo })
})
