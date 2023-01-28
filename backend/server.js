import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import mongoose from "mongoose"
import multer from 'multer'
// Routes
import userRoutes from './routes/userRoutes.js'
import postsRoutes from './routes/postsRoutes.js'
import {protectAuth} from "./middleware/authMiddleware.js";

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB connected: ${process.env.MONGO_URI}`.cyan))
    .catch(err => console.log(`Error: ${err.message}`.red.underline.bold))
const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
const storage = multer.diskStorage({
    destination: (_,__,cb)=>{
        cb(null, 'uploads')
    },
    filename: (_,file,cb)=>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage})

app.use(express.json())

app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/posts', postsRoutes)
app.post('/api/upload', protectAuth, upload.single('image'), (req,res ) =>{
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)