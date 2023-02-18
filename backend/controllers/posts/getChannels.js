import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'

export const GetChannels = asyncHandler(async (req, res) => {
	const user = await User.findById(String(req.userID)).lean()
	res.json([...user.channels])
})
