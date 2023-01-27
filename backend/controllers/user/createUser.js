// @desc    Create user
// @route   POST /api/user/create
// @access  Public

import Posts from '../../models/postsModel.js'
import asyncHandler from 'express-async-handler'
import User from "../../models/userModel.js";

export const createUser = asyncHandler(async(req, res) => {
    const userBody = req.body
    const {name} = userBody
    const isHaveUser = await User.findOne({name})
    if(isHaveUser){
        res.status(400)
        throw new Error("Oh, that name's taken!")
    }
    const user = await User.create(userBody)
    res.json({user})
})