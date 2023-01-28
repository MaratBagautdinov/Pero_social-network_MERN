// @desc    Create user
// @route   POST /api/user/create
// @access  Public

import User from "../../models/userModel.js";
import {GenToken} from "../../helpers/generateToken.js";
import asyncHandler from "express-async-handler";
import {validatorRegister} from "../../middleware/authMiddleware.js";
import {validationResult} from "express-validator";
import {Error} from "mongoose";
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) res.status(400).json(errors.array())
        const userBody = req.body
        const {email} = userBody
        const isHaveUser = await User.findOne({email})
        if (isHaveUser) {
            res.status(400)
            throw new Error("Oh, that email's taken!")
        }
        const user = await User.create(userBody)
        const token = GenToken(user._id)
        res.json({
            user,
            token
        })
    }catch (err){
        res.status(500).json(err.message)
    }
})

export const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    let isValidPass = false
    if(user){
        isValidPass = await bcrypt.compare(password, user.password)
    }
    if(!user || !isValidPass){
        res.status(400)
        throw new Error('Email or password is invalid')
    }
    const token = GenToken(user._id)
    res.json({
        user,
        token
    })
})

export const getMe = asyncHandler(async(req, res) => {
    let id = req.userID
    try {
        const user = await User.findById(id)
        res.json(user)
    }catch (e) {
        res.status(403).json({
            message: 'Access is closed!!'
        })
    }
})
