import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

mongoose.set('strictQuery', false)
const {ObjectId} = mongoose.Schema
const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    location:{
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    images: {
        logo:{
            type: String,
            required: false,
            default: null
        },
        gallery: [{
            type: ObjectId,
            required: false,
            default: []
        }]
    },
    status: String,
    profession: String,
    posts: [{
        type: ObjectId,
        required: false,
        ref: 'Posts',
        default: []
    }],
    favoritePosts: [{
        type: ObjectId,
        required: false,
        ref: 'Posts',
        default: []
    }],
    favoriteImages: [{
        type: ObjectId,
        required: false,
        ref: 'Images',
        default: []
    }]
},{
    minimize: false
})

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next){
    if (!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User', userSchema)

export default User