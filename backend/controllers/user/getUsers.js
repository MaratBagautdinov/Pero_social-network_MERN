// @desc    Get user
// @route   GET /api/users
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'

export const getUsers = asyncHandler(async(req, res) => {
    const user = await User.find({})

    res.json(user)
})