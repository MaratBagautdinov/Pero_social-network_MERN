// @desc    Get user
// @route   GET /api/users/:id
// @access  Public

import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {json} from "express";

export const getUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    res.json({user})
})

