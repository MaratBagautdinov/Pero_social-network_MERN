import express  from "express";
import morgan from "morgan";
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import mongoose, {connect} from "mongoose"
// Config
import {connectDB} from './config/db.js'
// Middleware
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
// Routes
import userRoutes from './routes/userRoutes.js'
import postsRoutes from './routes/postsRoutes.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB connected: ${process.env.MONGO_URI}`.cyan))
    .catch(err => console.log(`Error: ${err.message}`.red.underline.bold))
const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(express.json())

app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/posts', postsRoutes)

app.use(errorHandler)
// app.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    ()=>console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)